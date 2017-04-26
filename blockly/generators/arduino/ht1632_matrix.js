goog.provide('Blockly.Arduino.ht1632_matrix');

goog.require('Blockly.Arduino');

Blockly.Arduino.ht1632_matrix_begin = function() {
  Blockly.Arduino.definitions_['define_adafruit_gfx'] = '#include "Adafruit_GFX.h"\n';
  Blockly.Arduino.definitions_['define_adafruit_HT1632'] = '#include "Adafruit_HT1632.h"\n';
  var ht_data = this.getFieldValue("HT_DATA");
  var ht_cs = this.getFieldValue("HT_CS");
  var ht_wr = this.getFieldValue("HT_WR");
  Blockly.Arduino.definitions_['define_HT1632'] = 'Adafruit_HT1632LEDMatrix HTmatrix = Adafruit_HT1632LEDMatrix('+ht_data+', '+ht_wr+', '+ht_cs+');\n';
  Blockly.Arduino.setups_['setup_matrix'] = 'HTmatrix.begin(ADA_HT1632_COMMON_16NMOS);\n';
  var code = "";
  return "";
};

Blockly.Arduino.ht1632_matrix_fill = function() {
  var style = this.getFieldValue('STYLE');
  if (style=='FILL') {
    var code = "HTmatrix.fillScreen();\n";
  } else {
    var code = "HTmatrix.clearScreen();\n";
  }
  
  return code;
};

Blockly.Arduino.ht1632_matrix_write = function() {
  var code = "HTmatrix.writeScreen();\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_print = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '""'
  var x = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC) || 0
  var y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC) || 0
  var code = "HTmatrix.setCursor("+x+", "+y+");\n";
  code += "HTmatrix.print("+ content + ");\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_setcursor = function() {
  var x = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var code = "HTmatrix.setCursor("+ x + "," + y + ");\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_settextsize = function() {
  var size = this.getFieldValue('SIZE');
  var code = "HTmatrix.setTextSize("+ size + ");\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_setbrightness = function() {
  var brightness = Blockly.Arduino.valueToCode(this, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var code = "HTmatrix.setBrightness("+ brightness + ");\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_drawpixel = function() {
  var x = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var color = this.getFieldValue('COLOR');
  var code = "HTmatrix.drawPixel(" + x + "," + y + "," + color + ");\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_settextcolor = function() {
  var color = this.getFieldValue('COLOR');
  var code = "HTmatrix.setTextColor(" + color + ");\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_settextwrap = function() {
  var bool = (this.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  var code = "HTmatrix.setTextWrap("+bool + ");\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_drawcircle = function() {
  var x = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var d = Blockly.Arduino.valueToCode(this, 'D', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var color = this.getFieldValue('COLOR');
  var style = this.getFieldValue('STYLE');
  if (style == 'FILL') {
    var code = "HTmatrix.fillCircle(" + x + "," + y + "," + d + "," + color + ");\n";
  } else {
    var code = "HTmatrix.drawCircle(" + x + "," + y + "," + d + "," + color + ");\n";
  }
  return code;
};

Blockly.Arduino.ht1632_matrix_drawline = function() {
  var x0 = Blockly.Arduino.valueToCode(this, 'X0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y0 = Blockly.Arduino.valueToCode(this, 'Y0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var x1 = Blockly.Arduino.valueToCode(this, 'X1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y1 = Blockly.Arduino.valueToCode(this, 'Y1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var color = this.getFieldValue('COLOR');
  var code = "HTmatrix.drawLine(" + x0 + "," + y0 + "," + x1 + "," + y1 + "," + color + ");\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_drawrect = function() {
  var x0 = Blockly.Arduino.valueToCode(this, 'X0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y0 = Blockly.Arduino.valueToCode(this, 'Y0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var w = Blockly.Arduino.valueToCode(this, 'W', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var h = Blockly.Arduino.valueToCode(this, 'H', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var color = this.getFieldValue('COLOR');
  var style = this.getFieldValue('STYLE');
  if (style=='FILL') {
    var code = "HTmatrix.fillRect(" + x0 + "," + y0 + "," + w + "," + h + "," + color + ");\n";
  } else {
    var code = "HTmatrix.drawRect(" + x0 + "," + y0 + "," + w + "," + h + "," + color + ");\n";
  }
  return code;
};

Blockly.Arduino.ht1632_matrix_setrotation = function() {
  var angle = this.getFieldValue('ANGLE');
  var code = "HTmatrix.setRotation(" + angle + ");\n";
  return code;
};
