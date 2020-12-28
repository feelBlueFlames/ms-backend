module.exports = {
  baseRequest: {
    id: {
        type: "string",
        description: "唯一标识符",
    },
},
baseResponse: {
    code: { type: "integer", description: "", required: true, example: 1 },
    datas: { type: "integer", required: true },
    msg: { type: "integer", required: true, example: "请求成功！" },
},
}