export const styles = {
    // Body
    body: [
        'flex',
        'flex-col',
        'h-dvh',
        'antialiased',
        'font-inter'
    ].join(' '),
    
    // Główny kontener
    container: [
        'flex-1',
        'overflow-y-auto',
        'overflow-x-hidden',
        'p-4'
    ].join(' '),
    
    // Wrapper dla view
    viewWrapper: [
        'flex',
        'flex-col'
    ].join(' '),

    reportWrapper: [
        'flex',
        'flex-col',
        'h-full'
    ].join(' '),

    calendarWrapper: [
        'flex',
        'flex-col',
        'h-full'
    ].join(' '),
    
    // Menu nawigacji
    menu: [
        'bg-white',
        'shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]',
        'h-16',
        'flex',
        'items-center',
        'justify-evenly',
        'relative',
        'z-10'
    ].join(' '),
    
    // Link w menu - bazowe
    menuLinkBase: [
        'flex',
        'flex-col',
        'items-center'
    ].join(' '),
    
    // Link w menu - domyślny
    menuLinkDefault: [
        'text-gray-600',
        'hover:text-blue-300',
        'transition-colors'
    ].join(' '),
    
    // Link w menu - aktywny
    menuLinkActive: [
        'text-blue-600'
    ].join(' '),
    
    // Ikona bazowa
    iconBase: [
        'fa-solid',
        'fa-2x'
    ].join(' '),
    
    // Tekst pod ikoną
    menuText: [
        'text-xs'
    ].join(' '),
    
    // Kontener kontrolek
    controlsRow: [
        'flex',
        'gap-4',
        'items-center',
        'mb-2'
    ].join(' '),

    chartContainer: [
        'flex-1'
    ].join(' '),

    calendarContainer: [
        'flex-1'
    ].join(' '),
    
    // Button group container
    buttonGroup: [
        'inline-flex',
        'rounded-lg',
        'border',
        'border-gray-300'
    ].join(' '),
    
    // Button w grupie - bazowy
    buttonGroupItemBase: [
        'px-4',
        'py-2',
        'text-sm',
        'font-medium',
        'border-r',
        'border-gray-300',
        'last:border-r-0',
        'first:rounded-l-lg',
        'last:rounded-r-lg'
    ].join(' '),
    
    // Button w grupie - domyślny
    buttonGroupItemDefault: [
        'text-gray-700',
        'hover:bg-gray-100',
        'transition-colors',
        'cursor-pointer'
    ].join(' '),
    
    // Button w grupie - aktywny
    buttonGroupItemActive: [
        'bg-blue-500',
        'text-white'
    ].join(' '),
    
    // Dropdown container
    dropdown: [
        'relative',
        'inline-block'
    ].join(' '),
    
    // Dropdown button
    dropdownButton: [
        'px-4',
        'py-2',
        'text-sm',
        'font-medium',
        'text-gray-700',
        'bg-white',
        'border',
        'border-gray-300',
        'rounded-lg',
        'hover:bg-gray-50',
        'flex',
        'items-center',
        'gap-2',
        'cursor-pointer'
    ].join(' '),
    
    // Dropdown menu
    dropdownMenu: [
        'absolute',
        'top-full',
        'left-0',
        'mt-1',
        'bg-white',
        'border',
        'border-gray-300',
        'rounded-lg',
        'shadow-lg',
        'min-w-full',
        'z-10',
        'hidden'
    ].join(' '),
    
    // Dropdown item
    dropdownItem: [
        'block',
        'px-4',
        'py-2',
        'text-sm',
        'text-gray-700',
        'hover:bg-gray-100',
        'cursor-pointer'
    ].join(' '),


    // Parameter control
    paramRow: [
        'flex',
        'items-center',
        'justify-between',
        'py-1'
    ].join(' '),
    
    paramPanel: [
        'bg-white',
        'rounded-lg',
        'shadow',
        'p-4',
        'max-w-md',
        'mx-auto',
        'mb-4'
    ].join(' '),

    paramPanelCompact: [
        'bg-white',
        'rounded-lg',
        'shadow',
        'p-4',
        'max-w-md',
        'mx-auto'
    ].join(' '),
    
    paramHeader: [
        'text-lg',
        'font-semibold',
        'text-gray-700',
        'mb-2'
    ].join(' '),
    
    paramDivider: [
        'border-b',
        'border-gray-200',
        'mb-3'
    ].join(' '),
    
    // Panel Pages
    panelPagesHeader: [
        'flex',
        'items-center',
        'justify-between',
        'mb-2'
    ].join(' '),
    
    panelPagesTitle: [
        'text-lg',
        'font-semibold',
        'text-gray-700',
        'flex-1',
        'text-center'
    ].join(' '),
    
    panelPagesIndicator: [
        'text-xs',
        'text-gray-500',
        'ml-2'
    ].join(' '),
    
    panelPagesBtn: [
        'w-8',
        'h-8',
        'flex',
        'items-center',
        'justify-center',
        'bg-gray-200',
        'hover:bg-gray-300',
        'rounded',
        'cursor-pointer',
        'transition-colors'
    ].join(' '),
    
    panelPagesBtnDisabled: [
        'w-8',
        'h-8',
        'flex',
        'items-center',
        'justify-center',
        'bg-gray-200',
        'rounded',
        'opacity-30',
        'cursor-not-allowed'
    ].join(' '),
    
    panelPagesBtnIcon: [
        'fa-solid',
        'text-sm',
        'text-gray-700'
    ].join(' '),
    
    panelPagesContent: [
        'relative'
    ].join(' '),
    
    // Panel Finance
    panelFinanceHeader: [
        'flex',
        'items-center',
        'justify-between',
        'mb-2'
    ].join(' '),
    
    paramLabel: [
        'text-sm',
        'text-gray-700'
    ].join(' '),
    
    paramControls: [
        'flex',
        'items-center',
        'gap-1'
    ].join(' '),
    
    paramBtn: [
        'w-7',
        'h-7',
        'flex',
        'items-center',
        'justify-center',
        'bg-gray-200',
        'hover:bg-gray-300',
        'rounded',
        'cursor-pointer',
        'transition-colors'
    ].join(' '),
    
    paramBtnDisabled: [
        'w-7',
        'h-7',
        'flex',
        'items-center',
        'justify-center',
        'bg-gray-200',
        'rounded',
        'opacity-30',
        'cursor-not-allowed'
    ].join(' '),
    
    paramBtnIcon: [
        'fa-solid',
        'text-xs',
        'text-gray-700'
    ].join(' '),
    
    paramValue: [
        'w-16',
        'text-center',
        'text-sm',
        'text-gray-700',
        'bg-gray-100',
        'rounded',
        'py-1'
    ].join(' '),
    
    // Results
    resultGrid: [
        'grid',
        'grid-cols-2',
        'md:grid-cols-2',
        'gap-2',
        'mt-3'
    ].join(' '),
    
    resultCard: [
        'rounded-lg',
        'p-3'
    ].join(' '),
    
    resultCardblue: ['bg-blue-50'].join(' '),
    resultCardgreen: ['bg-green-50'].join(' '),
    resultCardpurple: ['bg-purple-50'].join(' '),
    resultCardamber: ['bg-amber-50'].join(' '),
    resultCardrose: ['bg-rose-50'].join(' '),
    resultCardemerald: ['bg-emerald-50'].join(' '),
    resultCardindigo: ['bg-indigo-50'].join(' '),
    resultCardorange: ['bg-orange-50'].join(' '),
    
    resultCardLabel: [
        'text-xs',
        'text-gray-600',
        'mb-1'
    ].join(' '),
    
    resultCardValue: [
        'text-xl',
        'font-bold',
        'text-gray-800'
    ].join(' '),
    
    resultRow: [
        'flex',
        'justify-between',
        'items-center',
        'py-2',
        'border-b',
        'border-gray-200',
        'last:border-0'
    ].join(' '),
    
    resultRowLabel: [
        'text-sm',
        'text-gray-600'
    ].join(' '),
    
    resultRowValue: [
        'text-sm',
        'font-semibold',
        'text-gray-800'
    ].join(' ')
};

// Nazwy ikon
export const icons = {
    calendar: 'fa-calendar',
    report: 'fa-chart-simple',
    simulation: 'fa-spa',
    chevronDown: 'fa-chevron-down',
    chevronLeft: 'fa-chevron-left',
    chevronRight: 'fa-chevron-right',
    minus: 'fa-minus',
    plus: 'fa-plus'
};
