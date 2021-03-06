import reactCSS from 'reactcss'

export default reactCSS({
    'default': {
        wrapper: {
            display:    'flex',
            flexFlow:   'row wrap',
            fontWeight: 'bold',
            textAlign:  'center'
            // backgroundColor: 'black'
        },
        header:  {
            padding:         '10px',
            flex:            '1 100%',
            height:          '100px',
            backgroundColor: 'tomato'
        },
        footer:  {
            padding:         '10px',
            flex:            '1 100%',
            height:          '75px',
            order:           3,
            backgroundColor: 'lightgreen'
        },
        main:    {
            padding:         '10px',
            flex:            '3 0px',
            minHeight:       '400px',
            order:           2,
            textAlign:       'left',
            backgroundColor: 'deepskyblue'
        },
        aside1:  {
            padding:         '10px',
            order:           1,
            flex:            '1 auto',
            backgroundColor: 'gold',
            border:          '5px solid green'

        },
        aside2:  {
            padding:         '10px',
            order:           3,
            flex:            '1 auto',
            backgroundColor: 'hotpink'
        }
    }
})
