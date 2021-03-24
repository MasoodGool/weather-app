import React from "react";
import Switch, { Case, Default } from "react-switch-case";
import {
  WiCloudy,
  WiCloudyGusts,
  WiDayFog,
  WiDayThunderstorm,
  WiDaySunny,
  WiDaySnow,
  WiDayRain,
} from "react-icons/wi";

export default function Icon(weather) {
  return (
    <div>
      <Switch condition={weather.main}>
        <Case value="Clear">
          <WiDaySunny size={20} />
        </Case>
        <Case value="Clouds">
          <WiCloudy size={20} />
        </Case>
        <Case value="Rain">
          <WiDayRain size={20} />
        </Case>
        <Case value="Thunderstorm">
          <WiDayThunderstorm size={20} />
        </Case>
        <Case value="Snow">
          <WiDaySnow size={20} />
        </Case>
        <Case value="Fog">
          <WiDayFog size={20} />
        </Case>
        <Case value="Windy">
          <WiCloudyGusts size={20} />
        </Case>
        <Default>
          <div></div>
        </Default>
      </Switch>
    </div>
  );
}
