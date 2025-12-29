import { useState } from "react"
import { Pressable, View, Text } from "react-native"



export function PopCard() {
    const [pop, setPop] = useState(false)
    return (
        <View className="m-10">
            <Pressable onPress={() => setPop((prev) => !prev)}>
                :
            </Pressable>
            {
                pop && (
                    <View className=" w-52 rounded-md shadow-md absolute top-8 overflow-y-scroll">

                        <View className="grid grid-cols-[1fr_1fr_1fr_1fr] ">
                           <TopPart icon="ab"/>
                           <TopPart icon="ab"/>
                           <TopPart icon="ab"/>
                        </View>

                        <View className="">
                            <LabelButton title="Recent tabs" />
                            <LabelButton title="History" />
                            <View className="border-b"> </View>
                            <LabelButton title="Downloads" />
                            <LabelButton title="Bookmarks" />
                            <View className="border-b"> </View>
                            <LabelButton title="Share" />
                            <LabelButton title="Setting" />
                        </View>

                    </View>
                )

            }
        </View>
    )
}


export const LabelButton = ({ title }: { title: string }) => {
    return (
        <Pressable className="p-2 active:bg-neutral-700 ">
            icon {title}
        </Pressable>
    )
}

export const TopPart = ({icon} : {icon : string}) => {
    return (
        <Pressable className="active:bg-neutral-100 p-3">
            {
                icon
            }
        </Pressable>
    )
}