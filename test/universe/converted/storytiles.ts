// Converted from test/universe/corpus/storytiles.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  em,
  figure,
  image,
  importPackage,
  inline,
  left,
  m,
  parbreak,
  path,
  pct,
  pt,
  raw,
  rgb,
  show,
  space,
  strong,
} from '../../../src/index.ts'

export default () => {
  const pptConf = define('ppt-conf')
    .pos('arg1', T.any)
    .named('author', T.any, null)
    .named('font-size', T.any, null)
    .named('theme', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const titlePage = define('title-page')
    .named('author', T.any, null)
    .named('institution', T.any, null)
    .named('is-first-page', T.any, null)
    .named('main-title', T.any, null)
    .named('subtitle', T.any, null)
    .returns(T.any)
    .external()
  const outlinePage = define('outline-page').returns(T.any).external()
  const fourImagePage = define('four-image-page')
    .named('captions', T.any, null)
    .named('content', T.any, null)
    .named('gap', T.any, null)
    .named('grid-align-x', T.any, null)
    .named('image-height', T.any, null)
    .named('image-width', T.any, null)
    .named('images', T.any, null)
    .named('layout', T.any, null)
    .named('show-footer', T.any, null)
    .named('show-header', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const floatingBox = define('floating-box')
    .pos('arg1', T.content)
    .named('background', T.any, null)
    .named('border-color', T.any, null)
    .named('border-radius', T.any, null)
    .named('border-width', T.any, null)
    .named('padding', T.any, null)
    .named('shadow', T.any, null)
    .named('width', T.any, null)
    .named('x', T.any, null)
    .named('y', T.any, null)
    .returns(T.any)
    .external()
  const customLayoutPage = define('custom-layout-page')
    .named('content', T.content, [])
    .named('images', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const textPage = define('text-page')
    .named('column-count', T.any, null)
    .named('content', T.content, [])
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  return doc(
    importPackage('@preview/storytiles:0.0.1', [
      pptConf,
      titlePage,
      outlinePage,
      fourImagePage,
      floatingBox,
      customLayoutPage,
      textPage,
    ]),
    show((doc_2, ctx) =>
      pptConf({ title: 'image-ppt 模板', author: 'xbtt', theme: rgb('#1f4e79'), fontSize: pt(12) }, doc_2),
    ),
    inline(
      titlePage({
        mainTitle: 'image-ppt 模板',
        subtitle: '功能演示与使用指南',
        author: 'xbtt',
        institution: '开源项目',
        isFirstPage: true,
      }),
    ),
    inline(outlinePage()),
    inline(
      fourImagePage({
        title: '标准模式展示',
        images: [image(path('typst_logo.jpg')), null, image(path('typst_logo.jpg')), null],
        captions: [],
        content: blocks(
          inline(
            floatingBox(
              { x: pct(35) },
              blocks(
                inline`${strong(inline`标准模式特点`)}：`,
                m.list(
                  m.item(['✅ 显示页眉和页脚']),
                  m.item(['✅ 图片使用标准尺寸（35% × 40%）']),
                  m.item(['✅ 支持图片说明文字']),
                  m.item(['✅ 支持额外文字内容']),
                ),
              ),
            ),
          ),
          parbreak(),
        ),
      }),
    ),
    inline(
      fourImagePage({
        title: '无页眉页脚模式',
        showHeader: false,
        showFooter: false,
        images: [image(path('typst_logo.jpg')), image(path('typst_logo.jpg')), null, null],
        captions: ['1', '1', '1', '1'],
        content: inline(
          space,
          floatingBox(
            { x: pct(35) },
            blocks(
              inline`${strong(inline`无页眉页脚模式特点`)}：`,
              m.list(
                m.item(['❌ 隐藏页眉和页脚']),
                m.item(['✅ 图片尺寸自动增大（40% × 40%）']),
                m.item(['✅ 更多显示空间']),
                m.item(['✅ 适合图片重点展示']),
              ),
            ),
          ),
          space,
        ),
      }),
    ),
    inline(
      fourImagePage({
        showHeader: false,
        showFooter: false,
        title: null,
        content: null,
        gap: em(0),
        images: [
          image(path('typst_logo.jpg')),
          image(path('typst_logo.jpg')),
          image(path('typst_logo.jpg')),
          image(path('typst_logo.jpg')),
        ],
        captions: [],
      }),
    ),
    inline(
      fourImagePage({
        title: '只隐藏页眉模式',
        showHeader: false,
        showFooter: true,
        images: [
          figure({ caption: '图片1' }, image(path('typst_logo.jpg'))),
          null,
          null,
          image(path('typst_logo.jpg')),
        ],
        captions: ['图片1', '', '', '图片4'],
        content: inline(
          space,
          floatingBox(
            { x: pct(35) },
            blocks(
              inline`${strong(inline`只隐藏页眉模式特点`)}：`,
              m.list(m.item(['❌ 隐藏页眉']), m.item(['✅ 保留页脚']), m.item(['✅ 适合需要页码但不需要标题的场景'])),
            ),
          ),
          space,
        ),
      }),
    ),
    inline(
      fourImagePage({
        title: '只隐藏页脚模式',
        showHeader: true,
        showFooter: false,
        images: [null, image(path('typst_logo.jpg')), image(path('typst_logo.jpg')), null],
        captions: ['', '图片2', '图片3', ''],
        content: inline(
          space,
          floatingBox(
            { x: pct(35) },
            blocks(
              inline`${strong(inline`只隐藏页脚模式`)}：`,
              m.list(m.item(['✅ 保留页眉']), m.item(['❌ 隐藏页脚']), m.item(['✅ 适合不需要页码的展示场景'])),
            ),
          ),
          space,
        ),
      }),
      space,
      fourImagePage({
        title: '线性布局模式',
        layout: 'linear',
        images: [image(path('typst_logo.jpg')), null, image(path('typst_logo.jpg')), null],
        captions: ['线性图1', '占位符', '线性图2', '占位符'],
        content: blocks(
          inline`${strong(inline`线性布局特点`)}：`,
          m.list(
            m.item(['✅ 垂直排列图片']),
            m.item(['✅ 适合流程展示']),
            m.item(['✅ 图片更大（60% × 80%）']),
            m.item(['✅ 更适合长图显示']),
          ),
        ),
      }),
    ),
    inline(
      fourImagePage({
        showHeader: false,
        showFooter: false,
        layout: 'linear',
        title: null,
        content: null,
        images: [image(path('typst_logo.jpg')), image(path('typst_logo.jpg')), null],
        captions: ['', '', ''],
      }),
    ),
    inline(
      customLayoutPage({
        title: '自定义布局展示',
        content: blocks(
          '这个页面演示了自定义图片位置功能：',
          m.list(
            m.item(['✅ 自由控制图片位置（x, y坐标）']),
            m.item(['✅ 自定义图片大小（width, height）']),
            m.item(['✅ 支持图片说明文字']),
            m.item(['✅ 灵活的页面布局']),
          ),
          '右上角和左下角分别放置了测试图片。',
        ),
        images: [
          {
            content: image(path('typst_logo.jpg')),
            x: pct(60),
            y: pct(10),
            width: pct(35),
            height: pct(25),
            caption: '右上角图片',
          },
          {
            content: image(path('typst_logo.jpg')),
            x: pct(5),
            y: pct(60),
            width: pct(30),
            height: pct(20),
            caption: '左下角图片',
          },
          { content: null, x: pct(70), y: pct(70), width: pct(25), height: pct(15), caption: '占位符' },
        ],
      }),
    ),
    inline(
      textPage({
        title: '使用说明',
        content: blocks(
          m.heading(1, '模板功能概览'),
          '本PPT模板提供了以下主要功能：',
          m.lines(
            m.heading(2, '页面类型'),
            m.list(
              m.item([strong(inline`标题页`), '：演示文稿封面']),
              m.item([strong(inline`目录页`), '：自动生成目录']),
              m.item([strong(inline`四图片页`), '：2×2网格或线性布局']),
              m.item([strong(inline`自定义布局页`), '：自由控制图片位置']),
              m.item([strong(inline`纯文字页`), '：支持多栏布局']),
            ),
          ),
          m.lines(
            m.heading(2, '页眉页脚控制'),
            m.list(
              m.item([raw('show-header: true/false'), space, '- 控制页眉显示']),
              m.item([raw('show-footer: true/false'), space, '- 控制页脚显示']),
              m.item(['图片大小根据页面空间自动调整']),
            ),
          ),
          m.lines(
            m.heading(2, '图片处理'),
            m.list(
              m.item(['在主文件中使用', space, raw('image()'), space, '函数加载图片']),
              m.item(['支持相对路径和绝对路径']),
              m.item(['自动错误处理，显示友好占位符']),
              m.item(['支持多种图片格式']),
            ),
          ),
          m.lines(
            m.heading(2, '尺寸自适应'),
            m.list(
              m.item([strong(inline`全屏模式`), '：49.5% × 100%（网格）']),
              m.item([strong(inline`无边框模式`), '：40% × 100%（网格）']),
              m.item([strong(inline`标准模式`), '：35% × 100%（网格）']),
              m.item([strong(inline`线性布局`), '：更大的垂直空间']),
            ),
          ),
          m.heading(2, '使用建议'),
          m.enum(
            m.numbered(1, [strong(inline`图片准备`), '：建议使用统一尺寸的图片']),
            m.numbered(2, [strong(inline`路径管理`), '：推荐使用相对路径，便于项目移植']),
            m.numbered(3, [strong(inline`内容规划`), '：合理安排文字和图片的比例']),
            m.numbered(4, [strong(inline`样式定制`), '：可以修改主题色和字体大小']),
          ),
        ),
        columnCount: 2,
      }),
    ),
    inline(
      fourImagePage({
        title: '自定义尺寸示例',
        images: [
          image(path('typst_logo.jpg')),
          image(path('typst_logo.jpg')),
          image(path('typst_logo.jpg')),
          image(path('typst_logo.jpg')),
        ],
        gridAlignX: left,
        captions: ['小图1', '小图2', '小图3', '小图4'],
        imageHeight: pct(25),
        imageWidth: pct(30),
        content: inline(
          space,
          floatingBox(
            blocks(
              inline`${strong(inline`自定义尺寸功能`)}：`,
              m.list(
                m.item(['✅ 手动指定图片高度：25%']),
                m.item(['✅ 手动指定图片宽度：30%']),
                m.item(['✅ 覆盖自动计算的尺寸']),
                m.item(['✅ 适合特殊布局需求']),
              ),
            ),
          ),
          space,
        ),
      }),
    ),
    inline(
      fourImagePage({
        title: '浮动内容框演示',
        images: [image(path('typst_logo.jpg')), image(path('typst_logo.jpg')), null, null],
        captions: ['背景图1', '背景图2', '', ''],
        content: blocks(
          inline(
            floatingBox(
              { x: pct(5), y: pct(5) },
              blocks(
                inline`${strong(inline`浮动内容框功能`)}：`,
                m.list(
                  m.item(['✅ 在页面任意位置添加内容框']),
                  m.item(['✅ 自定义位置和大小']),
                  m.item(['✅ 支持半透明背景']),
                  m.item(['✅ 可选阴影效果']),
                  m.item(['✅ 层级控制（浮在其他内容上方）']),
                ),
                '右下角有一个浮动的提示框 →',
              ),
            ),
            space,
            floatingBox(
              {
                x: pct(65),
                y: pct(50),
                width: pct(30),
                background: rgb(255, 255, 255, 200),
                borderColor: rgb('#e74c3c'),
                borderWidth: pt(2),
                shadow: true,
              },
              blocks(
                m.heading(1, '💡 重要提示'),
                '这是一个浮动的内容框，可以放置在页面的任意位置！',
                m.lines(
                  inline`${strong(inline`特点`)}：`,
                  m.list(m.item(['半透明背景']), m.item(['圆角边框']), m.item(['阴影效果'])),
                ),
              ),
            ),
          ),
          parbreak(),
        ),
      }),
    ),
    inline(
      textPage({
        title: '多浮动框组合',
        columnCount: 2,
        content: blocks(
          m.heading(1, '浮动内容框高级用法'),
          '这个页面展示了如何在同一页面使用多个浮动框：',
          m.lines(
            m.heading(2, '用途示例'),
            m.list(
              m.item([strong(inline`注释框`), '：为特定内容添加解释']),
              m.item([strong(inline`警告框`), '：突出显示重要信息']),
              m.item([strong(inline`提示框`), '：提供额外的帮助信息']),
              m.item([strong(inline`装饰框`), '：增强页面视觉效果']),
            ),
          ),
          m.lines(
            m.heading(2, '设计建议'),
            m.enum(
              m.numbered(1, ['避免过多浮动框，影响阅读']),
              m.numbered(2, ['保持一致的视觉风格']),
              m.numbered(3, ['合理安排位置，避免遮挡主要内容']),
              m.numbered(4, ['使用不同颜色区分不同类型的信息']),
            ),
          ),
          '各个角落都有不同类型的浮动框示例。',
        ),
      }),
    ),
    inline(
      floatingBox(
        {
          x: pct(5),
          y: pct(15),
          width: pct(20),
          background: rgb(255, 255, 224, 200),
          borderColor: rgb('#f39c12'),
          shadow: false,
        },
        blocks(inline(strong(inline`📝 注释`)), '这里可以添加对主要内容的补充说明。'),
      ),
    ),
    inline(
      floatingBox(
        {
          x: pct(75),
          y: pct(15),
          width: pct(20),
          background: rgb(255, 240, 240, 200),
          borderColor: rgb('#e74c3c'),
          borderWidth: pt(2),
        },
        blocks(inline(strong(inline`⚠️ 重要`)), '关键信息提醒，请注意查看！'),
      ),
    ),
    inline(
      floatingBox(
        {
          x: pct(5),
          y: pct(75),
          width: pct(20),
          background: rgb(240, 248, 255, 200),
          borderColor: rgb('#3498db'),
          borderRadius: pt(8),
        },
        blocks(inline(strong(inline`💡 提示`)), '有用的小贴士和建议。'),
      ),
    ),
    inline(
      floatingBox(
        {
          x: pct(75),
          y: pct(75),
          width: pct(20),
          background: rgb(248, 255, 248, 200),
          borderColor: rgb('#27ae60'),
          borderRadius: pt(10),
          shadow: true,
        },
        blocks(inline(strong(inline`🎨 装饰`)), '美化页面的装饰元素。'),
      ),
    ),
    inline(
      fourImagePage({
        title: '浮动框与图片的完美结合',
        showHeader: false,
        showFooter: false,
        images: [
          image(path('typst_logo.jpg')),
          image(path('typst_logo.jpg')),
          image(path('typst_logo.jpg')),
          image(path('typst_logo.jpg')),
        ],
        captions: [],
        content: inline(
          space,
          floatingBox(
            {
              x: pct(30),
              y: pct(35),
              width: pct(40),
              background: rgb(255, 255, 255, 240),
              borderColor: rgb('#8e44ad'),
              borderWidth: pt(3),
              borderRadius: pt(15),
              padding: pt(12),
              shadow: true,
            },
            blocks(
              m.heading(1, '🖼️ 图片展示区'),
              '四张图片展示了不同的内容，每张图片都有其独特的价值。',
              m.lines(
                inline`${strong(inline`浮动框优势`)}：`,
                m.list(m.item(['不影响图片布局']), m.item(['提供额外信息层']), m.item(['增强视觉层次'])),
              ),
            ),
          ),
        ),
      }),
    ),
  )
}
