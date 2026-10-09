// Converted from test/universe/corpus/caidan.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  datetime,
  define,
  doc,
  external,
  image,
  importPackage,
  inline,
  m,
  path,
  pt,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const caidan = external('caidan')
  const en_text = define('en_text')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .named('fill', T.any, null)
    .returns(T.any)
    .external()
  const nord0 = external('nord0')
  const cuisine = define('cuisine').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const item = define('item').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const caidan_with = define('with')
    .named('cover_image', T.any, null)
    .named('num_columns', T.any, null)
    .named('page_height', T.any, null)
    .named('page_width', T.any, null)
    .named('title', T.content, [])
    .named('update_date', T.any, null)
    .returns(T.any)
    .external(caidan)
  return doc(
    importPackage('@preview/caidan:0.1.0', [caidan, en_text, nord0, cuisine, item]),
    show(
      caidan_with({
        title: inline(en_text({ fill: nord0 }, pt(22), inline`Chen's Private Cuisine`)),
        cover_image: image(path('cover.png')),
        update_date: datetime.today(),
        page_height: pt(595.28),
        page_width: pt(841.89),
        num_columns: 3,
      }),
    ),
    m.lines(
      inline(cuisine(inline`鲁菜`, inline`Shandong Cuisine`)),
      m.list(
        m.item([item(inline`葱烧海参`, inline`Braised Sea Cucumber w/ Scallions`)]),
        m.item([item(inline`葱爆牛肉`, inline`Scallion Beef Stir-Fry`)]),
        m.item([item(inline`醋溜白菜`, inline`Napa Cabbage Stir-Fry w/ Vinegar`)]),
        m.item([item(inline`京酱肉丝`, inline`Sautéed Shredded Pork`)]),
        m.item([item(inline`风味茄子`, inline`Crispy Fried Eggplant`)]),
        m.item([item(inline`青岛脂渣`, inline`Qingdao Pork Greaves`)]),
        m.item([item(inline`炸萝卜丸子`, inline`Chinese Fried Radish Balls`)]),
        m.item([item(inline`油炸金蝉`, inline`Deep Fried Golden Cicada`)]),
        m.item([item(inline`猪肉白菜炖粉条`, inline`Braised Pork Belly w/ Vermicelli Noodles & Napa Cabbage`)]),
      ),
    ),
    m.lines(
      inline(cuisine(inline`川菜`, inline`Sichuan Cuisine`)),
      m.list(
        m.item([item(inline`宫保鸡丁`, inline`Gong Bao Chicken`)]),
        m.item([item(inline`回锅肉`, inline`Twice-cooked pork`)]),
        m.item([item(inline`麻婆豆腐`, inline`Mapo Tofu`)]),
      ),
    ),
    m.lines(
      inline(cuisine(inline`粤菜`, inline`Cantonese Cuisine`)),
      m.list(
        m.item([item(inline`腊味煲仔饭`, inline`Sausage Claypot Rice`)]),
        m.item([item(inline`脆皮乳鸽`, inline`Crispy Pigeon`)]),
        m.item([item(inline`梅菜扣肉`, inline`Braised Pork w/ Preserved Vegetable`)]),
        m.item([item(inline`葱油鸡`, inline`Scallion Oil Chicken`)]),
      ),
    ),
    m.lines(
      inline(cuisine(inline`家常菜 (荤)`, inline`Home-style Cuisine (Meaty)`)),
      m.list(
        m.item([item(inline`蒜香鸡翅`, inline`Garlic Chicken Wings`)]),
        m.item([item(inline`酱香鸭翅`, inline`Braised Duck Wings`)]),
        m.item([item(inline`爆炒鸡胗`, inline`Chicken Gizzard Stir-Fry`)]),
        m.item([item(inline`香辣红烧鸡爪`, inline`Spicy Chicken Feet`)]),
        m.item([item(inline`黄焖鸡米饭`, inline`Braised Chicken and Rice`)]),
        m.item([item(inline`马齿菜红烧肉`, inline`Braised Pork w/ Portulaca`)]),
        m.item([item(inline`板栗烧排骨`, inline`Braised Pork Ribs w/ Chestnuts`)]),
        m.item([item(inline`笋干烧排骨`, inline`Pork Ribs w/ Dried Bamboo Shoots`)]),
        m.item([item(inline`黑椒牛柳`, inline`Black Pepper Beef Stir-Fry`)]),
        m.item([item(inline`干煸蚕蛹`, inline`Crispy Silkworm Pupa`)]),
        m.item([item(inline`干锅牛蛙`, inline`Dry Pot Bullfrog`)]),
        m.item([item(inline`香煎带鱼`, inline`Pan-fried Beltfish`)]),
        m.item([item(inline`清蒸鲈鱼`, inline`Steamed Sea Bass`)]),
        m.item([item(inline`炸河虾`, inline`Fried Shrimps`)]),
        m.item([item(inline`粉蒸肉`, inline`Steamed Pork w/ Rice Flour`)]),
      ),
    ),
    m.lines(
      inline(cuisine(inline`家常菜`, inline`Home-style Cuisine`)),
      m.list(
        m.item([item(inline`豆腐脑`, inline`Douhua`)]),
        m.item([item(inline`蒜蓉秋葵`, inline`Galic Okra`)]),
        m.item([item(inline`手撕包菜`, inline`Hand-Torn Cabbage`)]),
        m.item([item(inline`炒紫甘蓝`, inline`Purple Cabbage Stir-Fry`)]),
        m.item([item(inline`清炒菠菜`, inline`Spinach Stir-Fry w/ Garlic`)]),
        m.item([item(inline`清炒四季豆`, inline`Stir Fry French Beans`)]),
        m.item([item(inline`酸辣土豆丝`, inline`Hot & Sour Shredded Potato`)]),
        m.item([item(inline`香椿炒蛋`, inline`Toon Scrambled Eggs`)]),
        m.item([item(inline`蒜苔炒蛋`, inline`Scrambled Eggs w/ Garlic Moss`)]),
        m.item([item(inline`韭黄炒蛋`, inline`Scrambled Eggs w/ Hotbed Chives`)]),
        m.item([item(inline`韭菜炒蛋`, inline`Scrambled Eggs w/ Chinese Chives`)]),
        m.item([item(inline`西红柿炒蛋`, inline`Tomato & Egg Stir-Fry`)]),
        m.item([item(inline`豆豉鲮鱼油麦菜`, inline`Stir Fry Indian lettuce w/ Fried Dace w/ Salted Black Beans`)]),
        m.item([item(inline`青椒肉末`, inline`Sautéed Minced Pork w/ Green Pepper${space}`)]),
        m.item([item(inline`豆角肉末`, inline`Long Beans Stir-Fry w/ Minced Pork`)]),
        m.item([item(inline`肉末毛豆`, inline`Edamame & Pork Mince Stir-Fry`)]),
        m.item([item(inline`油焖春笋`, inline`Braised Spring Bamboo Shoots`)]),
        m.item([item(inline`扬州炒饭`, inline`Yangzhou Fried Rice`)]),
        m.item([item(inline`腊肉炒蒜苗`, inline`Chinese Bacon Stir-Fry w/ Garlic Sprout`)]),
        m.item([item(inline`茄子烧排骨`, inline`Braised Pork Ribs w/ Eggplant`)]),
        m.item([item(inline`荷兰豆炒腊肠`, inline`Snow Peas & Chinese Sausage Stir-Fry`)]),
        m.item([item(inline`什锦玉米粒 (火腿)`, inline`Sautéed Peas & Corn w/ Ham`)]),
        m.item([item(inline`什锦玉米粒 (虾仁)`, inline`Sautéed Peas & Corn w/ Shrimp`)]),
        m.item([item(inline`什锦玉米粒 (鸡胸肉)`, inline`Sautéed Peas & Corn w/ Chicken Breast`)]),
        m.item([item(inline`蛋黄焗南瓜`, inline`Crispy Fried Pumpkin w/ Salted Egg Yolk`)]),
        m.item([item(inline`贝贝南瓜蒸蛋`, inline`Baby Pumpkin Steamed Eggs`)]),
        m.item([item(inline`上汤娃娃菜`, inline`Braised Baby Cabbage in Broth`)]),
        m.item([item(inline`台湾苍蝇头`, inline`Sauteed Minced Pork & Chive Flowers`)]),
      ),
    ),
    m.lines(
      inline(cuisine(inline`汤菜`, inline`Soup`)),
      m.list(
        m.item([item(inline`清炖羊肉汤`, inline`Mutton Soup`)]),
        m.item([item(inline`清炖鸡汤`, inline`Chincken Soup`)]),
        m.item([item(inline`松茸鸡蛋汤`, inline`Matsutake Egg Soup`)]),
        m.item([item(inline`冬瓜花甲汤`, inline`Winter Melon Clam Soup`)]),
        m.item([item(inline`鱼头豆腐汤`, inline`Milky Fish Soup w/ Tofu`)]),
        m.item([item(inline`玉米排骨汤`, inline`Sweet Corn Pork Ribs Soup`)]),
        m.item([item(inline`西红柿蛋花汤`, inline`Tomato Egg Soup`)]),
        m.item([item(inline`枸杞叶瘦肉汤`, inline`Wolfberry Leaves & Pork Liver Soup`)]),
      ),
    ),
    m.lines(
      inline(cuisine(inline`海鲜烧烤`, inline`Sea Food & Grills`)),
      m.list(
        m.item([item(inline`水煮虾`, inline`Poached Shrimp`)]),
        m.item([item(inline`蒜蓉炒大虾`, inline`Shrimp Stir-Fry w/ Garlic`)]),
        m.item([item(inline`油焖大虾`, inline`Braised Shrimps`)]),
        m.item([item(inline`清蒸蟹`, inline`Steamed Crab`)]),
        m.item([item(inline`香辣蟹`, inline`Sautéed Crab in Hot Spicy Sauce`)]),
        m.item([item(inline`爆炒鱿鱼须`, inline`Spicy Squid Stir Fry`)]),
        m.item([item(inline`香辣小鱿鱼`, inline`Spicy Baby Squid`)]),
        m.item([item(inline`蜜汁烤肋排`, inline`Honey BBQ Ribs`)]),
        m.item([item(inline`蜜汁烤鸡胸`, inline`Honey BBQ Chicken`)]),
        m.item([item(inline`奥尔良烤鸡腿`, inline`Orleans Style BBQ Chicken Legs`)]),
        m.item([item(inline`空气炸锅鸡丝`, inline`Roasted Shredded Chicken`)]),
        m.item([item(inline`烤茄子`, inline`Roasted Eggplant`)]),
        m.item([item(inline`蒜蓉粉丝生蚝`, inline`Steamed Oysters w/ Garlic Vermicelli`)]),
        m.item([item(inline`蒜蓉粉丝蛏子`, inline`Steamed Razor Clam w/ Garlic Vermicelli`)]),
      ),
    ),
    m.lines(
      inline(cuisine(inline`日韩料理`, inline`Japanese & Korean Cuisine`)),
      m.list(
        m.item([item(inline`韩式拌饭`, inline`Bibimbap`)]),
        m.item([item(inline`照烧肥牛饭`, inline`Teriyaki Beef Rice Bowl`)]),
      ),
    ),
    m.lines(
      inline(cuisine(inline`东南亚菜`, inline`Southeast Asian Cuisine`)),
      m.list(
        m.item([item(inline`泰式菠萝炒饭`, inline`Thai Pineapple Fried Rice`)]),
        m.item([item(inline`泰式咖喱虾`, inline`Thai Shrimp Curry`)]),
        m.item([item(inline`泰式咖喱蟹`, inline`Thai Crab Curry`)]),
        m.item([item(inline`泰式柠檬虾`, inline`Thai Lemon Shrimp`)]),
        m.item([item(inline`泰式青柠檬蒸鱼`, inline`Thai Steamed Fish w/ Lime`)]),
        m.item([item(inline`泰式酸辣鸡爪`, inline`Thai Cold Chicken Feet Salad`)]),
        m.item([item(inline`蒜蓉通心菜`, inline`Water Spinach Stir-Fry w/ Garlic`)]),
        m.item([item(inline`柠檬鸡胸肉 (融合菜)`, inline`Lemon Chicken Breast (Fusion Cuisine)`)]),
        m.item([item(inline`冬阴功`, inline`Tom Yum Goong`)]),
      ),
    ),
    m.lines(
      inline(cuisine(inline`西餐`, inline`Western Cuisine`)),
      m.list(
        m.item([item(inline`西冷牛排`, inline`Sirloin Steak`)]),
        m.item([item(inline`番茄肉酱意面`, inline`Spaghetti w/ Ground Beef`)]),
      ),
    ),
    m.lines(
      inline(cuisine(inline`凉菜`, inline`Cold Dishes`)),
      m.list(
        m.item([item(inline`老醋花生`, inline`Pickled Peanuts w/ Vinegar & Onion`)]),
        m.item([item(inline`凉拌鸡丝`, inline`Shredded Chicken Salad`)]),
        m.item([item(inline`凉拌苦瓜`, inline`Bitter Melon Salad`)]),
        m.item([item(inline`呛毛肚`, inline`Cold Spicy Beef Omasum Tripe`)]),
        m.item([item(inline`凉拌苦菊`, inline`Endive Salad`)]),
        m.item([item(inline`凉拌黄瓜`, inline`Shredded Cucumber w/ Sauce`)]),
        m.item([item(inline`皮蛋豆腐`, inline`Chilled Tofu w/ Century Egg`)]),
        m.item([item(inline`香干马兰头`, inline`Mixed Kalimeris Indica w/ Tofu`)]),
      ),
    ),
    m.lines(
      inline(cuisine(inline`面食`, inline`Dumplings & Noodles`)),
      m.list(
        m.item([item(inline`猪肉大葱水饺`, inline`Jiaozi Stuffed w/ Pork & Scallion`)]),
        m.item([item(inline`韭菜鸡蛋水饺`, inline`Jiaozi Stuffed w/ Chives & Eggs`)]),
        m.item([item(inline`鸡蛋手擀面`, inline`Handmade Noodles w/ Eggs`)]),
        m.item([item(inline`红烧牛肉面`, inline`Braised Beef Noodle Soup`)]),
        m.item([item(inline`潍坊大虾面`, inline`Weifang Shrimp Noodles`)]),
        m.item([item(inline`葱油拌面`, inline`Scallion Oil Noodles`)]),
        m.item([item(inline`豆角焖面`, inline`Braised Noodles w/ Green Beans`)]),
      ),
    ),
    m.lines(
      inline(cuisine(inline`小食`, inline`Snacks`)),
      m.list(
        m.item([item(inline`薯条`, inline`French Fries`)]),
        m.item([item(inline`薯饼`, inline`Hash Browns`)]),
        m.item([item(inline`鸡米花`, inline`Popcorn Chicken`)]),
        m.item([item(inline`盐焗腰果`, inline`Roasted Cashew Nuts`)]),
        m.item([item(inline`葡式蛋挞`, inline`Pasteis de Nata`)]),
        m.item([item(inline`苹果脆片`, inline`Apple Chips`)]),
      ),
    ),
    m.lines(
      inline(cuisine(inline`甜点`, inline`Desserts`)),
      m.list(
        m.item([item(inline`香蕉派`, inline`Banana Pie`)]),
        m.item([item(inline`戚风蛋糕`, inline`Chiffon Cake`)]),
        m.item([item(inline`蓝莓山药`, inline`Blueberry Yam`)]),
      ),
    ),
    m.lines(
      inline(cuisine(inline`饮品`, inline`Drinks`)),
      m.list(
        m.item([item(inline`港式冻柠茶`, inline`Hong Kong Style Iced Lemon Tea`)]),
        m.item([item(inline`莫吉托`, inline`Mojito`)]),
        m.item([item(inline`猕猴桃莫吉托`, inline`Kiwi Mojito`)]),
      ),
    ),
  )
}
