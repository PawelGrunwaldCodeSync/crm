import CSPanel from "@/pages/CSPanel";
import CSInvoices from "@/pages/CSInvoices";

export default [
    {
        path: '/',
        name: 'panel',
        component: CSPanel,
        title: 'Panel',
        icon: 'view-dashboard',
    },
    {
        path: '/invoices',
        name: 'invoices',
        component: CSInvoices,
        title: 'Faktury',
        icon: 'file-document-multiple',
    },
    {
        path: '/projects',
        name: 'projects',
        title: 'Projekty',
        icon: 'text-box-multiple',
    },
    {
        path: '/contractors',
        name: 'contractors',
        title: 'Kontrahenci',
        icon: 'account-multiple',
    },
    {
        path: '/users',
        name: 'users',
        title: 'Użytkownicy',
        icon: 'account-group',
    }
];
