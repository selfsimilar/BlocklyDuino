goog.provide('Blockly.Arduino.i2c_matrix');

goog.require('Blockly.Arduino');

Blockly.Arduino.i2c_matrix_begin = function() {
  var dropdown_address = this.getFieldValue('ADDRESS');
  var type = this.getFieldValue('TYPE');
  Blockly.Arduino.definitions_['define_wire'] = '#include <Wire.h>\n';
  Blockly.Arduino.definitions_['define_adafruit_ledbackpack'] = '#include "Adafruit_LEDBackpack.h"\n';
  Blockly.Arduino.definitions_['define_adafruit_gfx'] = '#include "Adafruit_GFX.h"\n';
  Blockly.Arduino.definitions_['define_' + type] = 'Adafruit_' + type + ' matrix = Adafruit_' + type + '();\n';
  Blockly.Arduino.setups_['setup_' + type + '_' + dropdown_address] = 'matrix.begin(' + dropdown_address + ');';
  var code = "";
  return "";
};

Blockly.Arduino.i2c_matrix_clear = function() {
  var code = "matrix.clear";
  return code;
};

Blockly.Arduino.i2c_matrix_setcursor = function() {
  var col = Blockly.Arduino.valueToCode(this, 'COL', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var row = Blockly.Arduino.valueToCode(this, 'ROW', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var code = "matrix.setcursor("+ col + "," + row + ")";
  return code;
};

Blockly.Arduino.i2c_matrix_print = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || ''
  var code = "matrix.print("+ content + ")";
  return code;
};

Blockly.Arduino.i2c_matrix_settextsize = function() {
  var size = Blockly.Arduino.valueToCode(this, 'SIZE', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var code = "matrix.textSize("+ size + ")";
  return code;
};

Blockly.Arduino.i2c_matrix_settextcolor = function() {
  var color = this.getFieldValue('COLOR');
  var code = "matrix.setTextColor(" + color + ")";
  return code;
};

Blockly.Arduino.i2c_matrix_settextwrap = function() {
  var bool = (this.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  var code = "matrix.setTextWrap("+bool + ")";
  return code;
};

Blockly.Arduino.i2c_matrix_drawpixel = function() {
  var x = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var color = this.getFieldValue('COLOR');
  var code = "matrix.drawPixel(" + x + "," + y + "," + color + ")";
  return code;
};

Blockly.Arduino.i2c_matrix_drawcircle = function() {
  var x = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var d = Blockly.Arduino.valueToCode(this, 'D', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var color = this.getFieldValue('COLOR');
  var code = "matrix.drawCircle(" + x + "," + y + "," + d + "," + color + ")";
  return code;
};

Blockly.Arduino.i2c_matrix_drawract = function() {
  var x0 = Blockly.Arduino.valueToCode(this, 'X0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y0 = Blockly.Arduino.valueToCode(this, 'Y0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var x1 = Blockly.Arduino.valueToCode(this, 'X1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y1 = Blockly.Arduino.valueToCode(this, 'Y1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var color = this.getFieldValue('COLOR');
  var code = "matrix.drawRact(" + x0 + "," + y0 + "," + x1 + "," + y1 + "," + color + ")";
  return code;
};

Blockly.Arduino.i2c_matrix_drawline = function() {
  var x0 = Blockly.Arduino.valueToCode(this, 'X0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y0 = Blockly.Arduino.valueToCode(this, 'Y0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var x1 = Blockly.Arduino.valueToCode(this, 'X1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y1 = Blockly.Arduino.valueToCode(this, 'Y1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var color = this.getFieldValue('COLOR');
  var code = "matrix.drawLine(" + x0 + "," + y0 + "," + x1 + "," + y1 + "," + color + ")";
  return code;
};

Blockly.Arduino.i2c_matrix_fillline = function() {
  var x0 = Blockly.Arduino.valueToCode(this, 'X0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y0 = Blockly.Arduino.valueToCode(this, 'Y0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var x1 = Blockly.Arduino.valueToCode(this, 'X1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y1 = Blockly.Arduino.valueToCode(this, 'Y1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var color = this.getFieldValue('COLOR');
  var code = "matrix.fillLine(" + x0 + "," + y0 + "," + x1 + "," + y1 + "," + color + ")";
  return code;
};

Blockly.Arduino.i2c_matrix_setrotation = function() {
  var angle = Blockly.Arduino.valueToCode(this, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var code = "matrix.setRotation(" + angle + ")";
  return code;
};

Blockly.Arduino.i2c_matrix_writedisplay = function() {
  var code = "matrix.writeDisplay()";
  return code;
};
