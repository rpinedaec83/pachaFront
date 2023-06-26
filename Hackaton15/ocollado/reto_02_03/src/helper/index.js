const myPlugin = {
    install(app) {
        app.config.globalProperties.$redirectPagination = (routerInstance, name, params) => {
            if (params) {
                routerInstance.push({
                    name,
                    params
                });
            } else {
                routerInstance.push({
                    name
                });
            }
        }

        app.config.globalProperties.$buildYoutubeURL = (keyVideo) => {
            const enableOrDisableControls = 'controls=0';
            const enableOrDisableShowInfo = 'showinfo=0';
            const enableOrDisableYTLogo = 'modestbranding=1';
            return `https://www.youtube.com/embed/${keyVideo}?${enableOrDisableControls}&${enableOrDisableShowInfo}&${enableOrDisableYTLogo}`
        }
    }
}

export default myPlugin;