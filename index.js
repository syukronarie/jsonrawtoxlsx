const XLSX = require("cc-xlsx");

const jsontoxlsx = (json) => {
	const workSheet = XLSX.utils.json_to_sheet(json);
	const workBook = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(workBook, workSheet, "sheet");
	// Generate buffer
	return XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
};

jsontoxlsx.middleware = function (_, res, next) {
	res.xlsx = function (fileName, json) {
		const xlsx = jsontoxlsx(json);
		res.setHeader("Content-Type", "application/vnd.openxmlformats");
		res.setHeader(
			"Content-disposition",
			"attachment;filename=" + fileName + ".xlsx"
		);
		res.end(xlsx, "binary");
	};
	next();
};

module.exports = jsontoxlsx;
