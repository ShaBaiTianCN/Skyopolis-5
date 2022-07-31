// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.add.items', e => {

    e.add([Item.of('minecraft:ghast_spawn_egg', '{EntityTag:{id:"minecraft:snow_golem"},RepairCost:0,display:{Name:\'{"text":"雪傀儡刷怪蛋"}\'}}')])
	
});


onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	event.hide(['create:crushed_uranium_ore', 'create:crushed_lead_ore', 'create:crushed_tin_ore', 'create:crushed_osmium_ore', 'create:crushed_zinc_ore', 'create:crushed_copper_ore', 'create:crushed_gold_ore', 'create:crushed_iron_ore'])
	event.hide(['caveopolis:diorite_pebble', 'caveopolis:granite_pebble', 'caveopolis:andesite_pebble', 'caveopolis:cobblestone_pebble', 'caveopolis:stone_pebble', 'caveopolis:wooden_shears', 'caveopolis:mossy_string'])

	const colours = [`white`,`light_gray`,`gray`,`black`,`red`,`orange`,`yellow`,`lime`,`green`,`light_blue`,`cyan`,`blue`,`purple`,`magenta`,`pink`,`brown`]
	const refined = [`controller`,`creative_controller`,`grid`,`crafting_grid`,`pattern_grid`,`fluid_grid`,`network_receiver`,`network_transmitter`,`relay`,`detector`,`security_manager`,`wireless_transmitter`,`disk_manipulator`,`crafter`,`crafter_manager`,`crafting_monitor`]

	//const applied = [`smart_cable`, `covered_cable`, `glass_cable`, `covered_dense_cable`,`smart_dense_cable`]
	
	colours.forEach(colours => {
		refined.forEach(refined => {
			event.hide([
				`refinedstorage:${colours}_${refined}`
			])
		})
	})

})

onEvent('item.tooltip', tooltip => {
    tooltip.add(['refinedstorage:network_receiver', 'refinedstorage:fluid_grid', 'refinedstorage:pattern_grid', 'refinedstorage:crafting_grid', 'refinedstorage:grid', 'refinedstorage:controller', 'refinedstorage:creative_controller', 'refinedstorage:network_transmitter', 'refinedstorage:crafting_monitor', 'refinedstorage:network_transmitter', 'refinedstorage:relay', 'refinedstorage:detector', 'refinedstorage:security_manager', 'refinedstorage:wireless_transmitter', 'refinedstorage:disk_manipulator', 'refinedstorage:crafter', 'refinedstorage:crafter_manager'], [Text.of('这些方块可以被染色，在物品上按”u“键来查看它们的配方。用染料右键方块也会更改颜色。').color(0x808080)])

	tooltip.add(['skyopolis_additions:weak_enriching_water_catalyst'], '投入水中将其转化为弱富集水')
	tooltip.add(['skyopolis_additions:undergarden_enriching_water_catalyst'], '投入弱富集水中将其转化为深园富集水')
	tooltip.add(['skyopolis_additions:strong_enriching_water_catalyst'], '投入深园富集水中将其转化为强富集水')
	tooltip.add(['skyopolis_additions:nether_enriching_water_catalyst'], '投入强富集水中将其转化为下界富集水催化剂')
	tooltip.add(['skyopolis_additions:ultimate_enriching_water_catalyst'], '投入宇宙富集水中将其转化为最终富集水')
	tooltip.add(['skyopolis_additions:eroding_water_catalyst'], '投入水中将其转化为侵蚀水')
	tooltip.add(['skyopolis_additions:cosmos_enriching_water_catalyst'], '投入下界富集水中将其转化为宇宙富集水')
	tooltip.add(['skyopolis:aqua_catalyst'], 'Right click on a mulch block to create water')
	tooltip.add(['skyopolis:flower_loot_box'], '右键打开！')
	tooltip.add(['skyopolis:sapling_loot_box'], '右键打开！')
	tooltip.add(['minecraft:mycelium'], '右键泥土上的蘑菇以产生菌丝')
	tooltip.add(['minecraft:dirt'], 'Right click bone meal on a block of mulch to create dirt')
	tooltip.add(['minecraft:water'], 'Right click a aqua catalyst on a block of mulch to create a water source block')
	tooltip.add(['skyopolis_additions:blank_bucket'], 'Drop into any skyopolis water to create a bucket of that water!')
	tooltip.add(['undergarden:virulent_mix_bucket'], '移动滚烫的流体时，桶将会被销毁（一次性）')
})



