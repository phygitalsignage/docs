export interface Page {
    label: string
    route: string
    children?: PageName[]
}

export type PageName =
    | "documentation"
    | "player"
    | "devices"
    | "install"
    | "update"
    | "playerRequirements"
    | "service"
    | "features"
    | "gettingStarted"
    | "howItWorks"
    | "usage"
    | "cloud"
    | "onpremises"
    | "offlineMode"
    | "cms"
    | "accountRecovery"
    | "troubleshooting"
    | "clearCache"
    | "whiteScreen"
    | "deleteAccount"
    | "emailConfirmation"
    | "support"
    | "subscription"
    | "trial"
    | "pilot"
    | "signIn"
    | "screenOffline"
    | "playlistPending"
    | "content"
    | "upload"
    | "duration"
    | "supportedFormats"
    | "contentUploadTroubleshooting"
    | "deletingContent"
    | "screens"
    | "screenRotation"
    | "playlists"
    | "updateTime"

export interface PageConfig {
    label: string
    route: string
    children?: PageName[]
}

export const pages: Record<PageName, PageConfig> = {
    documentation: {
        label: "Документация",
        route: "/",
    },
    player: {
        label: "Плеер Фиджитал",
        route: "/player",
        children: [
            "devices",
            "install",
            "update",
            "playerRequirements",
            "offlineMode",
        ],
    },
    devices: {
        label: "Устройства",
        route: "/player/devices",
    },
    install: {
        label: "Установка приложения",
        route: "/player/install",
    },
    update: {
        label: "Обновление приложения",
        route: "/player/update",
    },
    playerRequirements: {
        label: "Плеер — Минимальные требования",
        route: "/player/requirements",
    },
    service: {
        label: "О сервисе",
        route: "/service",
        children: ["howItWorks", "features", "gettingStarted"],
    },
    features: {
        label: "Возможности",
        route: "/service/features",
    },
    gettingStarted: {
        label: "Подключение",
        route: "/service/getting-started",
    },
    howItWorks: {
        label: "Как это работает?",
        route: "/service/how-it-works",
    },
    usage: {
        label: "Варианты использования",
        route: "/usage",
        children: ["cloud", "onpremises"],
    },
    cloud: {
        label: "Облако (SaaS)",
        route: "/usage/cloud",
    },
    onpremises: {
        label: "Серверное решение (On-premises)",
        route: "/usage/on-premises",
    },
    offlineMode: {
        label: "Офлайн-режим",
        route: "/player/offline",
    },
    cms: {
        label: "Личный кабинет",
        route: "/cms",
        children: [
            "signIn",
            "emailConfirmation",
            "accountRecovery",
            "deleteAccount",
        ],
    },
    accountRecovery: {
        label: "Восстановление доступа в личный кабинет",
        route: "/cms/recovery",
    },
    troubleshooting: {
        label: "Устранение неисправностей",
        route: "/troubleshooting",
        children: [
            "screenOffline",
            "playlistPending",
            "contentUploadTroubleshooting",
            "whiteScreen",
            "clearCache",
        ],
    },
    clearCache: {
        label: "Очистка кеша бразуера",
        route: "/troubleshooting/clear-cache",
    },
    whiteScreen: {
        label: "Белый экран в личном кабинете",
        route: "/troubleshooting/white-screen",
    },
    deleteAccount: {
        label: "Удаление учетной записи",
        route: "/cms/delete-account",
    },
    emailConfirmation: {
        label: "Подтверждение адреса электронной почты",
        route: "/cms/email-confirmation",
    },
    support: {
        label: "Служба поддержки",
        route: "/support",
    },
    subscription: {
        label: "Оформление подписки",
        route: "/subscription",
        children: ["trial", "pilot"],
    },
    trial: {
        label: "Бесплатный тестовый период",
        route: "/subscription/trial",
    },
    pilot: {
        label: "Пилотный проект",
        route: "/subscription/pilot",
    },
    signIn: {
        label: "Вход в личный кабинет",
        route: "/cms/sign-in",
    },
    screenOffline: {
        label: "Экран выключен — что делать?",
        route: "/troubleshooting/screen-offline",
    },
    playlistPending: {
        label: "Плейлист в статусе «Ожидание»",
        route: "/troubleshooting/playlist-pending",
    },
    content: {
        label: "Контент",
        route: "/content",
        children: ["supportedFormats", "upload", "duration", "deletingContent"],
    },
    upload: {
        label: "Загрузка контента",
        route: "/content/upload",
    },
    duration: {
        label: "Продолжительность контента",
        route: "/content/duration",
    },
    supportedFormats: {
        label: "Поддерживаемые форматы",
        route: "/content/supported-formats",
    },
    deletingContent: {
        label: "Удаление контента",
        route: "/content/deleting",
    },
    contentUploadTroubleshooting: {
        label: "Не получается загрузить контент",
        route: "/troubleshooting/upload-content",
    },
    screens: {
        label: "Экраны",
        route: "/screens",
        children: ["screenRotation"],
    },
    screenRotation: {
        label: "Поворот экрана",
        route: "/screens/screen-rotation",
    },
    playlists: {
        label: "Плейлисты",
        route: "/playlists",
        children: ["updateTime"],
    },
    updateTime: {
        label: "Скорость обновления плейлистов на экранах",
        route: "/playlists/update-time",
    },
}
