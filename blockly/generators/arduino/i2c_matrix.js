goog.provide('Blockly.Arduino.i2c_matrix');

goog.require('Blockly.Arduino');

Blockly.Arduino.i2c_mini_matrix_begin = function() {
  var dropdown_address = this.getFieldValue('ADDRESS');
  Blockly.Arduino.definitions_['define_wire'] = '#include <Wire.h>\n';
  Blockly.Arduino.definitions_['define_adafruit_ledbackpack'] = '#include "Adafruit_LEDBackpack.h"\n';
  Blockly.Arduino.definitions_['define_adafruit_gfx'] = '#include "Adafruit_GFX.h"\n';
  Blockly.Arduino.definitions_['define_8x8matrix'] = 'Adafruit_8x8matrix matrix = Adafruit_8x8matrix();\n';
  Blockly.Arduino.setups_['setup_8x8matrix'+dropdown_address] = 'matrix.begin(' + dropdown_address + ');';
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

Blockly.Arduino.i2c_matrix_writedisplay = function() {
  var code = "matrix.writeDisplay()";
  return code;
};
