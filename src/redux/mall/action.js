import * as type from "@/redux/constant"
// * setflightlsit
export const setFlightList = (flightList) => ({
	type: type.SET_FLIGHT_LIST,
	flightList
})
export const setFlightInfo = (flightInfo) => ({
	type: type.SET_FLIGHT_INFO,
	flightInfo
})

