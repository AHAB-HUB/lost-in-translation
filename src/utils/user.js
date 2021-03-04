
export default function profile(username = "", translations = []) {
    let user = {
        username: username,
        translations: translations
    }

    return {
        setUsername(word) {
            user.username = word
        },
        getUsername() {
            return user.username
        },
        addTranslation(translation) {

            if (user.translations.length > 9) {
                let temp = []
                temp.push(translation)
                temp = [...temp, ...this.getTranslations()]
                temp.pop()
                console.log("temp")
                console.log(temp)
                user.translations = temp
            } else {
                user.translations.push(translation)
            }
        },
        getTranslations() {
            return user.translations
        },
        getUser() {
            return user
        },
        setUser(newUser) {
            user = newUser
        }
    }
}