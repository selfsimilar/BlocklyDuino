/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.HT1632_matrix');

goog.require('Blockly.Blocks');

Blockly.Blocks.HT1632_matrix.HUE = 215;

Blockly.Blocks.mini_matrix_image = filepath.media+'/mini_matrix.jpg';

Blockly.Blocks.HT1632_matrix.current_type = null;

Blockly.Blocks.HT1632_matrix.checkBlocks = function(obj) {
  var legal = null;
  var current = obj.type;
  var blocks = obj.workspace.getAllBlocks();
  for (var i = 0; i < blocks.length; i++) {
    if ((blocks[i].type == 'ht1632_matrix_clear' ||
         blocks[i].type == 'ht1632_matrix_setcursor' ||
         blocks[i].type == 'ht1632_matrix_print' ||
         blocks[i].type == 'ht1632_matrix_settextsize' ||
         blocks[i].type == 'ht1632_matrix_settextwrap' ||
         blocks[i].type == 'ht1632_matrix_settextcolor' ||
         blocks[i].type == 'ht1632_matrix_drawpixel' ||
         blocks[i].type == 'ht1632_matrix_drawcircle' ||
         blocks[i].type == 'ht1632_matrix_drawrect' ||
         blocks[i].type == 'ht1632_matrix_drawline' ||
         blocks[i].type == 'ht1632_matrix_fillrect' ||
         blocks[i].type == 'ht1632_matrix_setrotation' ||
         blocks[i].type == 'ht1632_matrix_writedisplay') &&
        legal == null){
      if (blocks[i].type != current)  legal = true;
      else  legal = false;
    } 
    if(blocks[i].type == 'ht1632_matrix_begin'){
      return true;
    }
  }
  return legal;
};

Blockly.Blocks['ht1632_matrix_begin'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_BEGIN_TITLE)
      .appendField(Blockly.Msg.HT1632_MATRIX_TYPE)
      .appendField(new Blockly.FieldDropdown(
        profile.default.i2c_matrix_type, function(option) {
          var isHT1632 = (option == 'HT1632_16x24');
          this.sourceBlock_.updateShape_(isHT1632);
        }),
        "TYPE")
    this.appendDummyInput("HT1632_address")
      .appendField(Blockly.Msg.HT1632_MATRIX_ADDRESS)
      .appendField(new Blockly.FieldDropdown(profile.default.led_backpack_address),"ADDRESS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    Blockly.Blocks.HT1632_matrix.current_type = this.getFieldValue("TYPE");
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    if (this.getFieldValue('TYPE') == 'HT1632_16x24') {
      this.setWarningText("Need to install the Adafruit-GFX library and the Adafruit-HT1632 library.")
    } else {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_BEGIN_WARNING);
    }
  },
    /**
   * Create XML to represent whether the HT1632 pin inputs should be present.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var isHT1632 = (this.getFieldValue('TYPE') == 'HT1632_16x24');
    container.setAttribute('is_ht1632', isHT1632);
    return container;
  },
  /**
   * Parse XML to restore the HT1632 input pins or HT1632 address select.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var isHT1632 = (xmlElement.getAttribute('is_ht1632') == 'true');
    this.updateShape_(isHT1632);
  },
  /**
   * Modify this block to have(or not) inputs for HT1632 pins instead of an HT1632 address.
   * @param {boolean} isHT1632 True if this block starts an HT1632 matrix.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function(isHT1632) {
    // Add or remove a Value Input.
    var HT1632inputExists = this.getInput('HT1632_inputs');
    var addressInputExists = this.getInput('HT1632_address');
    if (isHT1632) {
      if (!HT1632inputExists) {
        this.appendDummyInput("HT1632_inputs")
        .appendField("Data pin:")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "HT_DATA")
        .appendField("WR pin:")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "HT_WR")
        .appendField("CS pin:")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "HT_CS");
      }
      if (addressInputExists) {
        this.removeInput("HT1632_address")
      }
    } else {
      if (HT1632inputExists) {
        this.removeInput("HT1632_inputs");
      }
      if (!addressInputExists) {
        this.appendDummyInput("HT1632_address")
          .appendField(Blockly.Msg.HT1632_MATRIX_ADDRESS)
          .appendField(new Blockly.FieldDropdown(profile.default.led_backpack_address),"ADDRESS");
      }
    }
  }
};

Blockly.Blocks['ht1632_matrix_clear'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_CLEAR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_setcursor'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_SETCURSOR);
    this.appendValueInput("COL")
      .setCheck("Number")
      .appendField(Blockly.Msg.COL);
    this.appendValueInput("ROW")
      .setCheck("Number")
      .appendField(Blockly.Msg.ROW);
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_print'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_PRINT);
    this.appendValueInput("CONTENT")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HT1632_MATRIX_TEXT);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_settextsize'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_SETTEXTSIZE)
      .appendField(new Blockly.FieldTextInput("1"),"SIZE");
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_settextwrap'] = {
  init: function() {
    var BOOLEANS =
        [[Blockly.Msg.LOGIC_BOOLEAN_TRUE, 'TRUE'],
         [Blockly.Msg.LOGIC_BOOLEAN_FALSE, 'FALSE']];
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_SETTEXTWRAP);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(BOOLEANS), 'BOOL');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_settextcolor'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_SETTEXTCOLOR);
    this.appendDummyInput()
      .appendField(Blockly.Msg.COLOR)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HT1632_MATRIX_LED_ON,"1"],[Blockly.Msg.HT1632_MATRIX_LED_OFF,"0"],[Blockly.Msg.GREEN,"LED_GREEN"],[Blockly.Msg.YELLOW,"LED_YELLOW"],[Blockly.Msg.RED,"1"]]), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_fillscreen'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image, 64, 64))
      .appendField("Fill screen with color:");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HT1632_MATRIX_LED_ON,"1"],[Blockly.Msg.HT1632_MATRIX_LED_OFF,"0"],[Blockly.Msg.GREEN,"LED_GREEN"],[Blockly.Msg.YELLOW,"LED_YELLOW"],[Blockly.Msg.RED,"1"]]), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_drawpixel'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_DRAWPIXEL);
    this.appendValueInput("X")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HT1632_MATRIX_X);
    this.appendValueInput("Y")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HT1632_MATRIX_Y);
    this.appendDummyInput()
      .appendField(Blockly.Msg.COLOR)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HT1632_MATRIX_LED_ON,"1"],[Blockly.Msg.HT1632_MATRIX_LED_OFF,"0"],[Blockly.Msg.GREEN,"LED_GREEN"],[Blockly.Msg.YELLOW,"LED_YELLOW"],[Blockly.Msg.RED,"1"]]), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_drawcircle'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_DRAWCIRCLE);
    this.appendValueInput("X")
      .setCheck("Number")
      .appendField(Blockly.Msg.HT1632_MATRIX_X);
    this.appendValueInput("Y")
      .setCheck("Number")
      .appendField(Blockly.Msg.HT1632_MATRIX_Y);
    this.appendValueInput("D")
      .setCheck("Number")
      .appendField(Blockly.Msg.HT1632_MATRIX_DIAMETER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.COLOR)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HT1632_MATRIX_LED_ON,"1"],[Blockly.Msg.HT1632_MATRIX_LED_OFF,"0"],[Blockly.Msg.GREEN,"LED_GREEN"],[Blockly.Msg.YELLOW,"LED_YELLOW"],[Blockly.Msg.RED,"1"]]), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_drawrect'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_DRAWRECT);
    this.appendValueInput("X0")
      .setCheck("Number")
      .appendField(Blockly.Msg.HT1632_MATRIX_X0);
    this.appendValueInput("Y0")
      .setCheck("Number")
      .appendField(Blockly.Msg.HT1632_MATRIX_Y0);
    this.appendValueInput("X1")
      .setCheck("Number")
      .appendField(Blockly.Msg.HT1632_MATRIX_X1);
    this.appendValueInput("Y1")
      .setCheck("Number")
      .appendField(Blockly.Msg.HT1632_MATRIX_Y1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.COLOR)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HT1632_MATRIX_LED_ON,"1"],[Blockly.Msg.HT1632_MATRIX_LED_OFF,"0"],[Blockly.Msg.GREEN,"LED_GREEN"],[Blockly.Msg.YELLOW,"LED_YELLOW"],[Blockly.Msg.RED,"1"]]), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_drawline'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_DRAWLINE);
    this.appendValueInput("X0")
      .setCheck("Number")
      .appendField(Blockly.Msg.HT1632_MATRIX_X0);
    this.appendValueInput("Y0")
      .setCheck("Number")
      .appendField(Blockly.Msg.HT1632_MATRIX_Y0);
    this.appendValueInput("X1")
      .setCheck("Number")
      .appendField(Blockly.Msg.HT1632_MATRIX_X1);
    this.appendValueInput("Y1")
      .setCheck("Number")
      .appendField(Blockly.Msg.HT1632_MATRIX_Y1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.COLOR)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HT1632_MATRIX_LED_ON,"1"],[Blockly.Msg.HT1632_MATRIX_LED_OFF,"0"],[Blockly.Msg.GREEN,"LED_GREEN"],[Blockly.Msg.YELLOW,"LED_YELLOW"],[Blockly.Msg.RED,"1"]]), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_fillrect'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_FILLRECT);
    this.appendValueInput("X0")
      .setCheck("Number")
      .appendField(Blockly.Msg.HT1632_MATRIX_X0);
    this.appendValueInput("Y0")
      .setCheck("Number")
      .appendField(Blockly.Msg.HT1632_MATRIX_Y0);
    this.appendValueInput("X1")
      .setCheck("Number")
      .appendField(Blockly.Msg.HT1632_MATRIX_X1);
    this.appendValueInput("Y1")
      .setCheck("Number")
      .appendField(Blockly.Msg.HT1632_MATRIX_Y1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.COLOR)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HT1632_MATRIX_LED_ON,"1"],[Blockly.Msg.HT1632_MATRIX_LED_OFF,"0"],[Blockly.Msg.GREEN,"LED_GREEN"],[Blockly.Msg.YELLOW,"LED_YELLOW"],[Blockly.Msg.RED,"1"]]), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_setrotation'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_SETROTATION)
      .appendField(new Blockly.FieldTextInput("1"),"ANGLE");
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_writedisplay'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_WRITEDISPLAY);
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};
