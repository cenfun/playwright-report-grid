const columns = {
    create: function() {
        return [{
            id: 'ok',
            name: '',
            width: 50,
            align: 'center',
            formatter: 'ok'
        }, {
            id: 'title',
            name: 'Title',
            maxWidth: 1230
        }, {
            id: 'type',
            name: 'Type',
            align: 'center'
        }, {
            id: 'status',
            name: 'Status'
        }, {
            id: 'expectedStatus',
            name: 'Expected'
        }, {
            id: 'outcome',
            name: 'Outcome',
            width: 85
        }, {
            id: 'error',
            name: 'Error',
            width: 100,
            formatter: 'error'
        }, {
            id: 'attachments',
            name: 'Attachments',
            width: 100,
            formatter: 'attachments'
        }, {
            id: 'retry',
            name: 'Retry',
            align: 'center',
            width: 50
        }, {
            id: 'duration',
            name: 'Duration',
            align: 'right',
            sortAsc: false,
            formatter: 'duration'
        }, {
            id: 'location',
            name: 'Location',
            width: 120,
            formatter: 'location'
        }];
    }
};

export default columns;
