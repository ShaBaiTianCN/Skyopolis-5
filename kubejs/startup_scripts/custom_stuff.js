/// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

// New Items
onEvent('item.registry', event => {

event.create('skyopolis_additions:nether_token').displayName('下界通行证').glow(true)
event.create('skyopolis_additions:end_token').displayName('末地通行证').glow(true)
event.create('skyopolis_additions:undergarden_token').displayName('深园通行证').glow(true)
event.create('skyopolis_additions:space_token').displayName('深空通行证').glow(true)
event.create('skyopolis_additions:blank_token').displayName('空白通行证')

event.create('skyopolis_additions:sky_bucks').displayName('天空币')
event.create('skyopolis_additions:star').displayName('星星')

event.create('skyopolis_additions:weak_enriching_water_catalyst').displayName('弱富集水催化剂')
event.create('skyopolis_additions:eroding_water_catalyst').displayName('侵蚀之水催化剂')
event.create('skyopolis_additions:strong_enriching_water_catalyst').displayName('强富集水催化剂')
event.create('skyopolis_additions:undergarden_enriching_water_catalyst').displayName('深园富集水催化剂')
event.create('skyopolis_additions:nether_enriching_water_catalyst').displayName('下界富集水催化剂')
event.create('skyopolis_additions:cosmos_enriching_water_catalyst').displayName('宇宙富集水催化剂')
event.create('skyopolis_additions:ultimate_enriching_water_catalyst').displayName('最终富集水催化剂')

event.create('skyopolis_additions:blank_bucket').displayName('空白桶')
event.create('skyopolis_additions:blank_ingot').displayName('空白锭')

event.create('skyopolis_additions:silver_ingot').displayName('银锭')
event.create('skyopolis_additions:silver_nugget').displayName('银粒')

event.create('skyopolis_additions:skyblock_menu').displayName('空岛菜单').texture(`minecraft:item/paper`).color(0, 0x2986CC).maxStackSize(1)



})

  
onEvent('block.modification', event => {
	event.modify('enderstorage:ender_chest', block => {
	  block.destroySpeed = 0.8
	})
})
  
onEvent('block.modification', event => {
	event.modify('enderstorage:ender_tank', block => {
	  block.destroySpeed = 0.8
	})
})




// New Blocks

onEvent('block.registry', event => {

event.create('skyopolis:blank_ore').displayName('空白矿石').material('stone').hardness(1.0).requiresTool(false)

})

//New Fluids


onEvent('fluid.registry', event => {
  event.create('skyopolis:undergarden_enriching_water').displayName('深园富集水').thickTexture(0x3C4C34).bucketColor(0x3C4C34)
  event.create('skyopolis:weak_enriching_water').displayName('弱富集水').thickTexture(0xD79113).bucketColor(0xD79113)
  event.create('skyopolis:strong_enriching_water').displayName('强富集水').thickTexture(0x808080).bucketColor(0x808080)
  event.create('skyopolis:nether_enriching_water').displayName('下界富集水').thickTexture(0x580704).bucketColor(0x580704)
  event.create('skyopolis:cosmos_enriching_water').displayName('宇宙富集水').thickTexture(0x323232).bucketColor(0x323232)
  event.create('skyopolis:eroding_water').displayName('侵蚀之水').thickTexture(0x392C4C).bucketColor(0x392C4C)
  event.create('skyopolis:ultimate_enriching_water').displayName('最终富集水').thickTexture(0xFC99E7).bucketColor(0xFC99E7)

})

/*

onEvent('fluid.registry', event => {
  // Add sulfuric acid fluid.

  event.create('sulfur_acid')
  .thinTexture(0xFFFF00)
  .bucketColor(0xFFFF00)
  .color(0xFFFF00)
  .displayName('Sulfuric Acid')
})

*/