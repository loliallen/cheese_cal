const rew = () => {
    xlsxj = require("xlsx-to-json");
    xlsxj({
        input: "cheeses.xlsx",
        output: "cheeses.json"
    }, function (err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log(result);
        }
    });
}
exports.module = rew();



