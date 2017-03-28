#include <LBLE.h>
#include <LBLEPeriphral.h>

LBLEAdvertisementData __beaconData;
void setup()
{
  LBLE.begin();
  while (!LBLE.ready()) { delay(1000); }

  __beaconData.configAsIBeacon("E671BCE5-538D-479E-95B5-368FAB07273C", 1, 2, (-40));
  LBLEPeripheral.advertise(__beaconData);

}


void loop()
{

}