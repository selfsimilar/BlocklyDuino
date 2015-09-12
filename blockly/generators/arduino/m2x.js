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

goog.provide('Blockly.Arduino.m2x');

goog.require('Blockly.Arduino');

Blockly.Arduino.m2x_begin = function() {
  var version = this.getFieldValue('VERSION');
  var id = this.getFieldValue('ID');
  var stream = this.getFieldValue('STREAM_NAME');
  var key= this.getFieldValue('KEY');

  Blockly.Arduino.definitions_['define_spi'] = '#include <SPI.h>';
  Blockly.Arduino.definitions_['define_ethernet'] = '#include <Ethernet' + version + '.h>';
  Blockly.Arduino.definitions_['define_jsonlite'] = '#include <jsonlite.h>';
  Blockly.Arduino.definitions_['define_M2XStreamClient'] = '#include <M2XStreamClient.h>';
  Blockly.Arduino.definitions_['define_ethernet_client'] = 'EthernetClient client;';
  Blockly.Arduino.definitions_['define_m2x_id'] = 'char m2xId[] = "' + id + '";';
  Blockly.Arduino.definitions_['define_m2x_stream_name'] = 'char m2xStream[] = "' + stream + '";';
  Blockly.Arduino.definitions_['define_m2x_key'] = 'char m2xKey[] = "' + key + '";';
  Blockly.Arduino.definitions_['define_m2xstreamclient'] = 'M2XStreamClient m2xClient(&client, m2xKey);';

  return "";
};

Blockly.Arduino.m2x_update_value = function() {
  var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0'

  var code =   'm2xClient.updateStreamValue(m2xId, m2xStream, ' + value + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.m2x_list_value = function() {
  Blockly.Arduino.setups_['setup_serial_'+ profile.default.serial] = 'Serial.begin('+profile.default.serial+');\n';

  Blockly.Arduino.definitions_['define_on_data_point_found'] =  'void on_data_point_found(const char* at, const char* value, int index, void* context, int type) {\n' +
    '  Serial.print("Found a data point, index:");\n' +
    '  Serial.println(index);\n' +
    '  Serial.print("Type:");\n' +
    '  Serial.println(type);\n' +
    '  Serial.print("At:");\n' +
    '  Serial.println(at);\n' +
    '  Serial.print("Value:");\n' +
    '  Serial.println(value);\n' +
    '}\n';

  var code = 'm2xClient.listStreamValues(m2xId, m2xStream, on_data_point_found, NULL);\n';
  return code;
};

Blockly.Arduino.m2x_custom_list_value = function() {
  var date0 = this.getFieldValue('DATE0');
  var hour0 = this.getFieldValue('HOUR0');
  var min0 = this.getFieldValue('MIN0');
  var sec0= this.getFieldValue('SEC0');
  var date1 = this.getFieldValue('DATE1');
  var hour1 = this.getFieldValue('HOUR1');
  var min1 = this.getFieldValue('MIN1');
  var sec1= this.getFieldValue('SEC1');


  Blockly.Arduino.setups_['setup_serial_'+ profile.default.serial] = 'Serial.begin('+profile.default.serial+');\n';

  Blockly.Arduino.definitions_['define_on_data_point_found'] =  'void on_data_point_found(const char* at, const char* value, int index, void* context, int type) {\n' +
    '  Serial.print("Found a data point, index:");\n' +
    '  Serial.println(index);\n' +
    '  Serial.print("Type:");\n' +
    '  Serial.println(type);\n' +
    '  Serial.print("At:");\n' +
    '  Serial.println(at);\n' +
    '  Serial.print("Value:");\n' +
    '  Serial.println(value);\n' +
    '}\n';

  var code =   'm2xClient.listStreamValues(m2xId, m2xStream, on_data_point_found, NULL, "start='+ date0 + 'T' + hour0 + ':' + min0 + ':' + sec0 + 'Z&end=' + date1 + 'T' + hour1 + ':' + min1 + ':' + sec1 + 'Z");\n';
  return code;
};


