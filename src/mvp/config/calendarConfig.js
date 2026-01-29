export const getCalendarOptions = () => ({
    initialView: 'dayGridMonth',
    height: 'auto',
    contentHeight: '80dvh',
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    }
});
