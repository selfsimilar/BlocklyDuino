'use strict';

goog.provide('Blockly.Arduino.sparki');

goog.require('Blockly.Arduino');

Blockly.JavaScript['sparki_move_forward'] = function(block) {
  var value_forwarddist = Blockly.JavaScript.valueToCode(block, 'forwardDist', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'sparki.moveForward(' + value_forwarddist + ');\n';
  return code;
};

Blockly.JavaScript['sparki_move_backward'] = function(block) {
  var value_backwarddist = Blockly.JavaScript.valueToCode(block, 'backwardDist', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'sparki.moveBackward(' + value_backwarddist + ');\n';
  return code;
};

Blockly.JavaScript['sparki_move_left'] = function(block) {
  var value_leftangle = Blockly.JavaScript.valueToCode(block, 'leftAngle', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'sparki.moveLeft(' + value_leftangle + ');\n';
  return code;

Blockly.JavaScript['sparki_move_right'] = function(block) {
  var value_rightangle = Blockly.JavaScript.valueToCode(block, 'rightAngle', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'sparki.moveRight(' + value_rightangle + ');\n';
  return code;
};

Blockly.JavaScript['sparki_opengripper'] = function(block) {
  var value_opengripperdist = Blockly.JavaScript.valueToCode(block, 'openGripperDist', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'sparki.gripperOpen(' + value_opengripperdist + ');\n';
  return code;
};

Blockly.JavaScript['sparki_closegripper'] = function(block) {
  var value_closegripperdist = Blockly.JavaScript.valueToCode(block, 'closeGripperDist', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'sparki.gripperClose(' + value_closegripperdist + ');\n';
  return code;
};

Blockly.JavaScript['sparki_stop_movement'] = function(block) {
  var code = 'sparki.moveStop();\n';
  return code;
};

Blockly.JavaScript['sparki_stopgripper'] = function(block) {
  var code = 'sparki.gripperStop();\n';
  return code;
};

Blockly.JavaScript['sparki_bark'] = function(block) {
  var value_frequency = Blockly.JavaScript.valueToCode(block, 'frequency', Blockly.JavaScript.ORDER_ATOMIC);
  var value_time = Blockly.JavaScript.valueToCode(block, 'Time', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'sparki.beep(' + value_frequency + ',' + value_time +');\n';
  return code;
};

Blockly.JavaScript['sparki_ultrasonicdistance'] = function(block) {
  var code = 'sparki.ping();\n';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sparki_leftlight'] = function(block) {
  var code = 'sparki.lightLeft();\n';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sparki_rightlight'] = function(block) {
  var code = 'sparki.lightRight();\n';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sparki_centerlight'] = function(block) {
  var code = 'sparki.lightCenter();\n';
  return code;
};

Blockly.JavaScript['include_sparki_library'] = function(block) {
  var code = '#include <sparki.h>;\n';
  return code;
};