'use strict';

goog.provide('Blockly.Arduino.sparki');

goog.require('Blockly.Arduino');


Blockly.Arduino.sparki_move_forward = function() {
  Blockly.Arduino.definitions_['define_sparki'] = '#include <sparki.h>;\n';
  var value_forwarddist = this.getFieldValue('forwardDist');
  var code = 'sparki.moveForward(' + value_forwarddist + ');\n';
  console.log("debug")
  return code;
};

Blockly.Arduino.sparki_move_backward = function() {
  Blockly.Arduino.definitions_['define_sparki'] = '#include <sparki.h>;\n';
  var value_backwarddist = this.getFieldValue('backwardDist');
  var code = 'sparki.moveBackward(' + value_backwarddist + ');\n';
  return code;
};

Blockly.Arduino.sparki_move_left = function() {
  Blockly.Arduino.definitions_['define_sparki'] = '#include <sparki.h>;\n';
  var value_leftangle = this.getFieldValue('leftAngle');
  var code = 'sparki.moveLeft(' + value_leftangle + ');\n';
  return code;
}

Blockly.Arduino.sparki_move_right = function() {
  Blockly.Arduino.definitions_['define_sparki'] = '#include <sparki.h>;\n';
  var value_rightangle = this.getFieldValue('rightAngle');
  var code = 'sparki.moveRight(' + value_rightangle + ');\n';
  return code;
};

Blockly.Arduino.sparki_opengripper = function() {
  Blockly.Arduino.definitions_['define_sparki'] = '#include <sparki.h>;\n';
  var value_opengripperdist = this.getFieldValue('openGripperDist');
  var code = 'sparki.gripperOpen(' + value_opengripperdist + ');\n';
  return code;
};

Blockly.Arduino.sparki_closegripper = function() {
  Blockly.Arduino.definitions_['define_sparki'] = '#include <sparki.h>;\n';
  var value_closegripperdist = this.getFieldValue('closeGripperDist');
  var code = 'sparki.gripperClose(' + value_closegripperdist + ');\n';
  return code;
};

Blockly.Arduino.sparki_stop_movement = function() {
  Blockly.Arduino.definitions_['define_sparki'] = '#include <sparki.h>;\n';
  var code = 'sparki.moveStop();\n';
  return code;
};

Blockly.Arduino.sparki_stopgripper = function() {
  Blockly.Arduino.definitions_['define_sparki'] = '#include <sparki.h>;\n';
  var code = 'sparki.gripperStop();\n';
  return code;
};

Blockly.Arduino.sparki_servo = function() {
  Blockly.Arduino.definitions_['define_sparki'] = '#include <sparki.h>;\n';
  var angle = Blockly.Arduino.valueToCode(this, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var code = 'sparki.servo(' + angle + ');\n';
  return code;
};

Blockly.Arduino.sparki_bark = function() {
  Blockly.Arduino.definitions_['define_sparki'] = '#include <sparki.h>;\n';
  var value_frequency = this.getFieldValue('frequency');
  var value_time = this.getFieldValue('Time');
  var code = 'sparki.beep(' + value_frequency + ',' + value_time +');\n';
  return code;
};

Blockly.Arduino.sparki_ultrasonicdistance = function() {
  Blockly.Arduino.definitions_['define_sparki'] = '#include <sparki.h>;\n';
  var code = 'sparki.ping()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.sparki_lose = function() {
  Blockly.Arduino.definitions_['define_sparki'] = '#include <sparki.h>;\n';
  var code = 'sparki.moveRight(random(0, 360));\n';
  return code;
}

Blockly.Arduino.sparki_ir_reflectance_sensor = function() {
  Blockly.Arduino.definitions_['define_sparki'] = '#include <sparki.h>;\n';
  var code = 'sparki.' + this.getFieldValue('methodName') + '()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.sparki_light_sensor = function() {
  Blockly.Arduino.definitions_['define_sparki'] = '#include <sparki.h>;\n';
  var code = 'sparki.' + this.getFieldValue('methodName') + '()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.sparki_accelerometer = function() {
  Blockly.Arduino.definitions_['define_sparki'] = '#include <sparki.h>;\n';
  var code = 'sparki.accel' + this.getFieldValue('axis') + '()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.sparki_lcd_print = function() {
  Blockly.Arduino.definitions_['define_sparki'] = '#include <sparki.h>;\n';
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var code = 'sparki.println(' + content + ');\n' +
             'sparki.updateLCD();\n';
  return code;
};

Blockly.Arduino.sparki_lcd_clear = function() {
  Blockly.Arduino.definitions_['define_sparki'] = '#include <sparki.h>;\n';
  var code = 'sparki.clearLCD();\n'
  return code;
};
