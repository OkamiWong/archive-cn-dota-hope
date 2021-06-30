const getCommand = (url, fileName) => `docker run singlefilez "${url}" > ${fileName}`

const baseUrls = [
    ['https://tieba.baidu.com/p/657041007?', 123, '我是中国dota的希望(原创小说,欢迎转载,请注明出处)'],
    ['https://tieba.baidu.com/p/657041007?see_lz=1&', 2, '我是中国dota的希望(原创小说,欢迎转载,请注明出处)_只看楼主'],
    ['https://tieba.baidu.com/p/669085711?', 169, '我是中国dota的希望(续)'],
    ['https://tieba.baidu.com/p/669085711?see_lz=1&', 5, '我是中国dota的希望(续)_只看楼主'],
    ['https://tieba.baidu.com/p/701031988?', 172, '我是中国dota的希望（三十五 至 完）'],
    ['https://tieba.baidu.com/p/701031988?see_lz=1&', 6, '我是中国dota的希望（三十五 至 完）_只看楼主']
]

const cmds = []

baseUrls.map((url) => {
    for (let i = 1; i <= url[1]; i += 1) {
        cmds.push(getCommand(`${url[0]}pn=${i}`, `"/home/okami/sources/temp/cn-dota-hope/${url[2]}_${i}.html"`))
    }
})

$.quote = (s) => s

for (let i = 0; i < cmds.length; i += 1) {
    await $`${cmds[i]}`
    await $`sleep 5`
}
