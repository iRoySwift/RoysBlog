/*
 * @Author: Roy
 * @Date: 2022-03-17 21:06:55
 * @LastEditors: Roy
 * @LastEditTime: 2022-09-28 16:52:10
 * @Description: 文档菜单
 */
/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
const tools = require('./sidebars/tools');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
    // But you can create a sidebar manually
    docs: [
        // {
        //   type: "category",
        //   label: "Tutorial",
        //   items: ["greeting", "tutorial-basics"],
        // },
        'intro',
        {
            type: 'category',
            label: 'Solana',
            collapsed: false,
            items: [
                {
                    type: 'category',
                    label: '安装Solana环境',
                    link: {
                        type: 'generated-index',
                        description: 'A Starter Kit for New Solana Developer',
                        keywords: ['Solana']
                    },
                    collapsed: false,
                    items: ['solana/install-solana-env']
                }
            ]
        },
        tools,
        {
            type: 'category',
            label: '前端',
            collapsed: false,
            items: [
                'web/react/custom-templates',

                {
                    type: 'category',
                    label: 'React',
                    link: {
                        type: 'generated-index',
                        description: "Let's learn React!",
                        keywords: ['react']
                    },
                    collapsed: false,
                    items: ['web/react/cra-advanced-config', 'web/react/learn-react']
                }
                // {
                //   type: 'category',
                //   label: 'Vue',
                //   link: {
                //     type: 'generated-index',
                //     description: "Let's learn Vue!",
                //     keywords: ['vue']
                //   },
                //   collapsed: false,
                //   items: ['web/vue/learn-vue']
                // }
            ]
        }
    ]
};

module.exports = sidebars;
