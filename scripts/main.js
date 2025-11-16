import * as server from '@minecraft/server'
//ここにコードを記述
server.system.beforeEvents.startup.subscribe(ev => {
    ev.customCommandRegistry.registerCommand({
        name:"coar:hello",
        description:"挨拶をする",
        permissionLevel:server.CommandPermissionLevel.Any,
        mandatoryParameters:[],
        optionalParameters:[],
    },(origin, arg) => {
        server.system.runTimeout(() => {
            origin.sourceEntity.runCommand("say こんにちわ!")
        })
    })
    ev.customCommandRegistry.registerCommand({
        name:"coar:thello",
        description:"Coar帝王様に挨拶をする",
        permissionLevel:server.CommandPermissionLevel.Any,
        mandatoryParameters:[],
        optionalParameters:[]
    },(origin, arg) => {
        server.system.runTimeout(() => {
            origin.sourceEntity.runCommand("say Coar帝王様こんにちわ！")
        })
    })
    ev.customCommandRegistry.registerCommand({
        name:"coar:hub",
        description:"前のhubにテレポートする",
        permissionLevel:server.CommandPermissionLevel.Any,
        mandatoryParameters:[],
        optionalParameters:[]
    },(origin, arg) => {
        server.system.runTimeout(() => {
            origin.sourceEntity.runCommand("tp @s -9 -60 -4")
        })
    })
    ev.customCommandRegistry.registerCommand({
        name:"coar:hub2",
        description:"新しいhubにテレポートする",
        permissionLevel:server.CommandPermissionLevel.Any,
        mandatoryParameters:[],
        optionalParameters:[]
    },(origin, arg) => {
        server.system.runTimeout(() => {
            origin.sourceEntity.runCommand("tp @s 26 -60 -168")
        })
    })
    ev.customCommandRegistry.registerCommand({
        name:"coar:sumo",
        description:"sumoの場所にテレポートする",
        permissionLevel:server.CommandPermissionLevel.Any,
        mandatoryParameters:[],
        optionalParameters:[]
    },(origin, arg) => {
        server.system.runTimeout(() => {
            origin.sourceEntity.runCommand("tp @s -148 1 29")
        })
    })
    ev.customCommandRegistry.registerCommand({
        name:"coar:coartp",
        description:"CoarseCarp99795にテレポートする 管理者限定",
        permissionLevel:server.CommandPermissionLevel.Admin,
        mandatoryParameters:[],
        optionalParameters:[]
    },(origin, arg) => {
        server.system.runTimeout(() => {
            origin.sourceEntity.runCommand("tp @s CoarseCarp99795")
        })
    })
})