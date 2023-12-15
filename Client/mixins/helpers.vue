<script>
export default {
    methods: {
        buildString(arrayStrings){
            let string = '';
            arrayStrings.forEach( (item, index) => {
                string += item;
                if (index !== arrayStrings.length - 1) string += ' | ';
            });
            return string;
        },
        getKeyString(object, value){
            return Object.keys(object).find(key => object[key] === value);
        },
        formatCurrency(value){
            return value / 1000000;
        },
        textColorStatus(value){
            const CASES = {
                0:'black',
                1:'black',
                2:'green-1',
                3:'red-1',
                4:'black'
            }
            return CASES[value]
        },
        colorBgRowTable({row, rowIndex}){
            const COLOR_FONDO = {
                0: '',
                1: '',
                2: 'bg-green-3',
                3: 'bg-red-4',
                4: 'ad-borrado',
                5: 'bg-blue-2' 
            }
            return COLOR_FONDO[row.estadoAnuncio]
        }
    }
}
</script>