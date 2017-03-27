#include <LBLE.h>
#include <LBLEPeriphral.h>

void setup()
{
  LBLE.begin();
  while (!LBLE.ready()) { delay(1000); }

  LBLEAdvertisementData __beaconData;
  __beaconData.configAsIBeacon("74278BDA-B644-4520-8F0C-720EAF059935", 1, 2, (-40));
  LBLEPeripheral.advertise(__beaconData);

}


void loop()
{

}