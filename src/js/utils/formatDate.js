import moment from "moment";

export default (date) => {
	date = moment(date, "M/D/YYYY HH:mm:ss");
	return date.format("YYYY年M月D日");
};
