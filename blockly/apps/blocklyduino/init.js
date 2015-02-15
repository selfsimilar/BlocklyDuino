/**
 * List of tab names.
 * @private
 */
var TABS_ = ['blocks', 'arduino', 'xml'];

var selected = 'blocks';

/**
 * Switch the visible pane when a tab is clicked.
 * @param {string} clickedName Name of tab clicked.
 */
function tabClick(clickedName) {
  // If the XML tab was open, save and render the content.
  if (document.getElementById('tab_xml').className == 'tabon') {
    var xmlTextarea = document.getElementById('content_xml');
    var xmlText = xmlTextarea.value;
    var xmlDom = null;
    try {
      xmlDom = Blockly.Xml.textToDom(xmlText);
    } catch (e) {
      var q =
          window.confirm('Error parsing XML:\n' + e + '\n\nAbandon changes?');
      if (!q) {
        // Leave the user on the XML tab.
        return;
      }
    }
    if (xmlDom) {
      Blockly.mainWorkspace.clear();
      Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xmlDom);
    }
  }

  // Deselect all tabs and hide all panes.
  for (var i = 0; i < TABS_.length; i++) {
    var name = TABS_[i];
    document.getElementById('tab_' + name).className = 'taboff';
    document.getElementById('content_' + name).style.visibility = 'hidden';
  }

  // Select the active tab.
  selected = clickedName;
  document.getElementById('tab_' + clickedName).className = 'tabon';
  // Show the selected pane.
  document.getElementById('content_' + clickedName).style.visibility =
    'visible';
  renderContent();
  Blockly.fireUiEvent(window, 'resize');
}

/**
 * Populate the currently selected pane with content generated from the blocks.
 */
function renderContent() {
  var content = document.getElementById('content_' + selected);
  // Initialize the pane.
  if (content.id == 'content_blocks') {
    // If the workspace was changed by the XML tab, Firefox will have performed
    // an incomplete rendering due to Blockly being invisible.  Rerender.
    Blockly.mainWorkspace.render();
  } else if (content.id == 'content_xml') {
    var xmlTextarea = document.getElementById('content_xml');
    var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    xmlTextarea.value = xmlText;
    xmlTextarea.focus();
    /*} else if (content.id == 'content_javascript') {
    content.innerHTML = Blockly.JavaScript.workspaceToCode();
  } else if (content.id == 'content_dart') {
    content.innerHTML = Blockly.Dart.workspaceToCode();
  } else if (content.id == 'content_python') {
    content.innerHTML = Blockly.Python.workspaceToCode();*/
  } else if (content.id == 'content_arduino') {
    //content.innerHTML = Blockly.Arduino.workspaceToCode();
    var arduinoTextarea = document.getElementById('content_arduino');
    arduinoTextarea.value = Blockly.Arduino.workspaceToCode();
    arduinoTextarea.focus();
  }
}

/**
 * Compute the absolute coordinates and dimensions of an HTML element.
 * @param {!Element} element Element to match.
 * @return {!Object} Contains height, width, x, and y properties.
 * @private
 */
function getBBox_(element) {
  var height = element.offsetHeight;
  var width = element.offsetWidth;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  return {
    height: height,
    width: width,
    x: x,
    y: y
  };
}

/**
 * Initialize Blockly.  Called on page load.
 */
function init() {
  //window.onbeforeunload = function() {
  //  return 'Leaving this page will result in the loss of your work.';
  //};
  var container = document.getElementById('content_area');
  var onresize = function(e) {
    var bBox = getBBox_(container);
    for (var i = 0; i < TABS_.length; i++) {
      var el = document.getElementById('content_' + TABS_[i]);
      el.style.top = bBox.y + 'px';
      el.style.left = bBox.x + 'px';
      // Height and width need to be set, read back, then set again to
      // compensate for scrollbars.
      el.style.height = bBox.height + 'px';
      el.style.height = (2 * bBox.height - el.offsetHeight) + 'px';
      el.style.width = bBox.width + 'px';
      el.style.width = (2 * bBox.width - el.offsetWidth) + 'px';
    }
    // Make the 'Blocks' tab line up with the toolbox.
    if (Blockly.mainWorkspace.toolbox_.width) {
      document.getElementById('tab_blocks').style.minWidth =
        (Blockly.mainWorkspace.toolbox_.width - 38) + 'px';
      // Account for the 19 pixel margin and on each side.
    }
  };
  window.addEventListener('resize', onresize, false);

  var toolbox = document.getElementById('toolbox');
  Blockly.inject(document.getElementById('content_blocks'),
                 {media: '../../media/',
                  toolbox: toolbox});

  auto_save_and_restore_blocks();

  //load from url parameter (single param)
  //http://stackoverflow.com/questions/2090551/parse-query-string-in-javascript
  var dest = unescape(location.search.replace(/^.*\=/, '')).replace(/\+/g, " ");
  if(dest){
    load_by_url(dest);
  }
}

function setCharacter(){
  var category;
  category = document.getElementById('category_inout');
  category.setAttribute("name",Blockly.Msg.CATEGORY_INOUT);
  category = document.getElementById('category_communication');
  category.setAttribute("name",Blockly.Msg.CATEGORY_COMMUNICATION);
  /*
  category = document.getElementById('category_servo');
  category.setAttribute("name",Blockly.Msg.CATEGORY_SERVO);
  category = document.getElementById('category_grove_analog');
  category.setAttribute("name",Blockly.Msg.CATEGORY_GROVE_ANALOG);
  category = document.getElementById('category_grove');
  category.setAttribute("name",Blockly.Msg.CATEGORY_GROVE);
  category = document.getElementById('category_grove_lcd');
  category.setAttribute("name",Blockly.Msg.CATEGORY_GROVE_LCD);
  category = document.getElementById('category_grove_motor');
  category.setAttribute("name",Blockly.Msg.CATEGORY_GROVE_MOTOR);
  */
  category = document.getElementById('category_logic');
  category.setAttribute("name",Blockly.Msg.CATEGORY_LOGIC);
  category = document.getElementById('category_control');
  category.setAttribute("name",Blockly.Msg.CATEGORY_CONTROL);
  category = document.getElementById('category_time');
  category.setAttribute("name",Blockly.Msg.CATEGORY_TIME);
  category = document.getElementById('category_math');
  category.setAttribute("name",Blockly.Msg.CATEGORY_MATH);
  category = document.getElementById('category_text');
  category.setAttribute("name",Blockly.Msg.CATEGORY_TEXT);
  category = document.getElementById('category_variables');
  category.setAttribute("name",Blockly.Msg.CATEGORY_VARIABLES);
  category = document.getElementById('category_functions');
  category.setAttribute("name",Blockly.Msg.CATEGORY_FUNCTIONS);

  var str;
  str = document.getElementById('tab_blocks');
  str.textContent = Blockly.Msg.BLOCKS;
  str = document.getElementById('tab_arduino');
  str.textContent = Blockly.Msg.ARDUINO;
  str = document.getElementById('tab_xml');
  str.textContent = Blockly.Msg.XML;
  str = document.getElementById('discard');
  str.textContent = Blockly.Msg.DISCARD;
  str = document.getElementById('save');
  str.textContent = Blockly.Msg.SAVE_XML;
  str = document.getElementById('fakeload');
  str.textContent = Blockly.Msg.LOAD_XML;
}

window.onload = function() {
  setCharacter();
  init();
}
