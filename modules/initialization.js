Hooks.on("renderCompendiumDirectory", async () => {
	if (game.folders.getName("Rough Nights & Hard Days")) {
		await game.folders.getName("Rough Nights & Hard Days").update({"name":  "Noches agitadas y días difíciles"  })
		await game.folders.getName("A Rough Night At The Three Feathers").update({"name":  "Una noche agitada en Las Tres Plumas"  })
		await game.folders.getName("A Day At The Trials").update({"name":  "Un día en los juzgados"  })
		await game.folders.getName("Nastassia's Wedding").update({"name":  "La boda de Nastassia"  })
		await game.folders.getName("A Night At The Opera").update({"name":  "Una noche en la ópera"  })
		await game.folders.getName("Lord of Ubersreik").update({"name":  "El señor de Ubersreik"  })
	}
	
	if (game.folders.getName("The Enemy Within")) {
		await game.folders.getName("The Enemy Within").update({"name":  "El enemigo interior"  })
	}
	
	if (game.folders.getName("Enemy in Shadows")) {
		await game.folders.getName("Enemy in Shadows").update({"name":  "El enemigo en las sombras"  })
		await game.folders.getName("Adventure").update({"name":  "Aventura"  })
		await game.folders.getName("Companion").update({"name":  "Compendio"  })
	}

	if (game.folders.getName("Death on the Reik")) {
		await game.folders.getName("Death on the Reik").update({"name":  "Muerte en el Reik"  })
		await game.folders.getName("Adventure").update({"name":  "Aventura"  })
		await game.folders.getName("Companion").update({"name":  "Compendio"  })
	}
})

