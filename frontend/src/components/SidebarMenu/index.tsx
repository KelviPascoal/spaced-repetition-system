import { ActiveLink } from './ActiveLink'
import * as S from './styles'
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";
import { FaRegFolderOpen } from "react-icons/fa";
import { LuCreditCard } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";

export function SidebarMenu() {
    return (
        <S.Aside aria-label="Menu lateral">
            <S.Nav>
                <S.NavList>
                    <ActiveLink icon={<RxDashboard size="16" />} title="Painel" description="Visão geral e estatísticas" to="/" />

                    <ActiveLink icon={<IoDocumentTextOutline size="16" />} title="Meus Textos" description="Analisar texto com IPA" to="/a" />

                    <ActiveLink icon={<LuBrain size="16" />} title="Revisão Anki" description="Praticar vocabulario" to="/b" />

                    <ActiveLink icon={<FaRegFolderOpen size="16" />} title="Baralho Anki" description="Gerenciar baralhos de estudo bla bla bla" to="/c" />

                    <ActiveLink icon={<LuCreditCard size="16" />} title="Planos" description="Assinatura e cobrança" to="/d" />
                </S.NavList>
            </S.Nav>
        </S.Aside>
    )
}
