// 将所有空格转为空字符串
const spaceReg = "test word".replace(/\s+/g,'')

// 从h5文本中取出src数据
const imgReg = /<img.*?(?:>|\/>)/gi; // 取出img标签
const srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
const detailModel = text.match(imgReg);
detailModel = detailModel.map(v => v.match(srcReg)[1]);