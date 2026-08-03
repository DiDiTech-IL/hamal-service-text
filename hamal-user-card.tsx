import { useUser } from "@clerk/react-router";
import { Link } from "react-router";
import SendMessageDialog from "~/components/communications/send-message";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from "~/components/ui/menubar";
import { convertRole, convertSlug } from "~/lib/utils";

function HamalUserCard() {
    const { user } = useUser();
    const existingOrganization = user?.organizationMemberships[0]!.organization!.slug!;
    const currentRole = convertRole(user?.organizationMemberships[0]?.role!);

    return (
        <div className="flex flex-col text-center justify-center items-center">
            <h1 className="text-3xl font-heebo font-bold">
                ברוכים הבאים לחמ"ל
            </h1>
            <p className="font-rubik py-4">
                {currentRole?.name} | {convertSlug(existingOrganization)}
            </p>
            <Menubar className="mb-6 w-fit" lang="he">
                <MenubarMenu >
                    <MenubarTrigger>מנהלי</MenubarTrigger>
                    <MenubarContent>
                        {currentRole?.menus.send_message! && <SendMessageDialog user={user?.username!} sendPermission={currentRole?.menus.send_message!} koachAdamPermission={currentRole?.menus.koach_adam!} />}
                        <MenubarSeparator />
                        <MenubarSub>
                            <MenubarSubTrigger>דוחות</MenubarSubTrigger>
                            <MenubarSubContent>
                                {currentRole?.menus.shavzak && < MenubarItem > שבצ"ק</MenubarItem>}
                                {currentRole?.menus.zelem && <MenubarItem>דוח צל"מ</MenubarItem>}
                            </MenubarSubContent>
                        </MenubarSub>
                        <MenubarSeparator />
                        {currentRole?.menus.koach_adam && <MenubarItem>
                            <Link to="/dashboard/koach-adam">כוח אדם</Link>
                        </MenubarItem>}
                        {currentRole?.menus.utilities && <MenubarItem>
                            <Link to="/dashboard/equipment">ציוד</Link>
                        </MenubarItem>}
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>מבצעי</MenubarTrigger>
                    <MenubarContent>
                        {currentRole?.menus.missions && <MenubarSub>
                            <MenubarSubTrigger>משימות</MenubarSubTrigger>
                            <MenubarSubContent>
                                <MenubarItem>
                                    <Link to="/dashboard/missions?status=active">
                                        שגרה מבצעית
                                    </Link>
                                </MenubarItem>
                                <MenubarItem>
                                    <Link to="/dashboard/missions?status=planned">
                                        יזומות ומבצעים
                                    </Link>
                                </MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>
                                    <Link to="/dashboard/missions?status=archive">
                                        ארכיון משימות
                                    </Link>
                                </MenubarItem>
                            </MenubarSubContent>
                        </MenubarSub>}
                        <MenubarSeparator />
                        {currentRole?.menus.yambaz && <MenubarItem>
                            <Link to="/dashboard/map">ימב"צ</Link>
                        </MenubarItem>}
                        {currentRole?.menus.darkash && <MenubarItem>
                            <Link to="/dashboard/communications">דרכ"ש גזרתי</Link>
                        </MenubarItem>}
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </div >
    )
}

export default HamalUserCard