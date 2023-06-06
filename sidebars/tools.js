/*
 * @Author: Roy
 * @Date: 2022-09-28 16:46:23
 * @LastEditors: Roy
 * @LastEditTime: 2022-09-28 16:55:32
 * @Description: 工具目录
 */

const tools = {
    type: 'category',
    label: '工具',
    collapsed: false,
    items: [
        {
            type: 'category',
            label: 'Git',
            link: {
                type: 'generated-index',
                description: "Let's learn Git!",
                keywords: ['git']
            },
            collapsed: false,
            items: ['tools/git/git-tutorial', 'tools/git/gitmoji']
        },
        {
            type: 'category',
            label: 'Lerna',
            link: {
                type: 'generated-index',
                description: "Let's learn Lerna!",
                keywords: ['Lerna']
            },
            collapsed: false,
            items: ['tools/lerna/learn-lerna']
        },
        {
            type: 'category',
            label: 'NPM',
            link: {
                type: 'generated-index',
                description: "Let's learn NPM!",
                keywords: ['NPM']
            },
            collapsed: false,
            items: ['tools/npm/learn-npm']
        },
        {
            type: 'category',
            label: '开发工具',
            link: {
                type: 'generated-index',
                description: "Let's learn NPM!",
                keywords: ['idea', 'vscode']
            },
            collapsed: false,
            items: ['tools/editor/idea&vscode']
        }
    ]
};
module.exports = tools;
