/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
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
 * @fileoverview Generating Arduino for list blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Arduino.shield_bot');

goog.require('Blockly.Arduino');

Blockly.Arduino.shield_bot_setmaxspeed = function() {
  var speed = this.getFieldValue('SPEED');

  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.setMaxSpeed(' + speed + ');\n';
  return code;
};


Blockly.Arduino.shield_bot_setmaxspeed_lr = function() {
  var left = this.getFieldValue('LEFT');
  var right = this.getFieldValue('RIGHT');

  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.setMaxSpeed(' + left + ',' + right + ');\n';
  return code;
};

Blockly.Arduino.shield_bot_right_motor = function() {
  var direction = Blockly.Arduino.valueToCode(this, 'DIRECTION', Blockly.Arduino.ORDER_ATOMIC) || ''

  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.rightMotor(' + direction + ');\n';
  return code;
};

Blockly.Arduino.shield_bot_left_motor = function() {
  var direction = Blockly.Arduino.valueToCode(this, 'DIRECTION', Blockly.Arduino.ORDER_ATOMIC) || ''

  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.leftMotor(' + direction + ');\n';
  return code;
};

Blockly.Arduino.shield_bot_forward = function() {
  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.forward();\n';
  return code;
};

Blockly.Arduino.shield_bot_backward = function() {
  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.backward();\n';
  return code;
};

Blockly.Arduino.shield_bot_drive = function() {
  var left = Blockly.Arduino.valueToCode(this, 'LEFT', Blockly.Arduino.ORDER_ATOMIC) || '127'
  var right = Blockly.Arduino.valueToCode(this, 'RIGHT', Blockly.Arduino.ORDER_ATOMIC) || '127'

  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.drive(' + left +',' + right +');\n';
  return code;
};

Blockly.Arduino.shield_bot_stop = function() {
  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.stop();\n';
  return code;
};

Blockly.Arduino.shield_bot_stopleft = function() {
  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.stopLeft();\n';
  return code;
};

Blockly.Arduino.shield_bot_stopright = function() {
  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.stopRight();\n';
  return code;
};

Blockly.Arduino.shield_bot_faststop = function() {
  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.fastStop();\n';
  return code;
};

Blockly.Arduino.shield_bot_faststop_left = function() {
  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.fastStopLeft();\n';
  return code;
};

Blockly.Arduino.shield_bot_faststop_right = function() {
  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.fastStopRight();\n';
  return code;
};

Blockly.Arduino.shield_bot_readsensor = function() {
  var sensor = this.getFieldValue('SENSOR');

  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.readS' + sensor + '();\n';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


