export const getCalendarOptions = () => ({
    initialView: 'dayGridMonth',
    height: 'auto',
    contentHeight: '100%',
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    }
});
