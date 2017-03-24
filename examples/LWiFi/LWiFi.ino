#include <LWiFi.h>

int wifiStatus;

char _lwifi_ssid[] = "mtklab";
char _lwifi_pass[] = "84149961";
void setup()
{
  wifiStatus = WiFi.begin(_lwifi_ssid, _lwifi_pass);
  Serial.begin(9600);

}


void loop()
{
  while (wifiStatus != WL_CONNECTED) {
    Serial.println(wifiStatus);
    wifiStatus = WiFi.begin(_lwifi_ssid, _lwifi_pass);
    delay(1000);
  }
  Serial.println("Connected!");

}