// while True:
//     print("Light Level:" + input.light_level())
//     if input.light_level() < 6:
//         light.set_all(light.rgb(255, 255, 255))
//     else:
//         light.clear()
// while True:
//     print("Light Level:" + input.light_level())
//     if input.light_level() < 6:
//         light.set_all(light.rgb(0, 0, 255))
//     elif input.light_level() > 11:
//         light.set_all(light.rgb(255, 255, 0))
//     else:
//         light.clear()
while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() < 6) {
        light.setAll(light.rgb(0, 0, 255))
    } else if (input.lightLevel() > 14) {
        light.setAll(light.rgb(255, 69, 0))
    } else {
        light.clear()
    }
    
}
