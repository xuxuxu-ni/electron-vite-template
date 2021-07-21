/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2021/7/20
 * Description: 文件描述
 */
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = `${selector +' 版本: '+ selector+'@'+text}`
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}`, process.versions[dependency])
    }
})
