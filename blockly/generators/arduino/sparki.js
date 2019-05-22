'use strict';

goog.provide('Blockly.Arduino.sparki');

goog.require('Blockly.Arduino');

Blockly.Arduino.sparki_move_forward = function() {
  var value_forwarddist = Blockly.Arduino.valueToCode(block, 'forwardDist', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'sparki.moveForward(' + value_forwarddist + ');\n';
  return code;
};

Blockly.Arduino.sparki_move_backward = function() {
  var value_backwarddist = Blockly.Arduino.valueToCode(block, 'backwardDist', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'sparki.moveBackward(' + value_backwarddist + ');\n';
  return code;
};

Blockly.Arduino.sparki_move_left = function() {
  var value_leftangle = Blockly.Arduino.valueToCode(block, 'leftAngle', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'sparki.moveLeft(' + value_leftangle + ');\n';
  return code;
}

Blockly.Arduino.sparki_move_right = function() {
  var value_rightangle = Blockly.Arduino.valueToCode(block, 'rightAngle', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'sparki.moveRight(' + value_rightangle + ');\n';
  return code;
};

Blockly.Arduino.sparki_opengripper = function() {
  var value_opengripperdist = Blockly.Arduino.valueToCode(block, 'openGripperDist', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'sparki.gripperOpen(' + value_opengripperdist + ');\n';
  return code;
};

Blockly.Arduino.sparki_closegripper = function() {
  var value_closegripperdist = Blockly.Arduino.valueToCode(block, 'closeGripperDist', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'sparki.gripperClose(' + value_closegripperdist + ');\n';
  return code;
};

Blockly.Arduino.sparki_stop_movement = function() {
  var code = 'sparki.moveStop();\n';
  return code;
};

Blockly.Arduino.sparki_stopgripper = function() {
  var code = 'sparki.gripperStop();\n';
  return code;
};

Blockly.Arduino.sparki_bark = function() {
  var value_frequency = Blockly.Arduino.valueToCode(block, 'frequency', Blockly.Arduino.ORDER_ATOMIC);
  var value_time = Blockly.Arduino.valueToCode(block, 'Time', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'sparki.beep(' + value_frequency + ',' + value_time +');\n';
  return code;
};

Blockly.Arduino.sparki_ultrasonicdistance = function() {
  var code = 'sparki.ping();\n';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.sparki_leftlight = function() {
  var code = 'sparki.lightLeft();\n';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.sparki_rightlight = function() {
  var code = 'sparki.lightRight();\n';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.sparki_centerlight = function() {
  var code = 'sparki.lightCenter();\n';
  return code;
};

Blockly.Arduino.include_sparki_library = function() {
  var code = '#include <sparki.h>;\n';
  return code;
};
