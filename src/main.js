import ms from 'ms';
import lunchtime from './lunchtime.js';
import millisecondsUntil from './millisecondsUntil.js';
import ReactMapboxGL from "react-mapbox-gl";

const Map = ReactMapboxGL({
	accessToken: "123123"
});

export default function howLongUntilLunch(hours, minutes) {
	// lunch is at 12.30
	if (hours === undefined) hours = 12;
	if (minutes === undefined) minutes = 30;

	var millisecondsUntilLunchTime = millisecondsUntil(lunchtime(hours, minutes));
	return ms(millisecondsUntilLunchTime, { long: true });
}