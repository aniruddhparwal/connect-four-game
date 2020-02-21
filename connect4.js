class Connect4 {
    constructor(selector) {
        this.ROWS = 6;
        this.COLS = 7;
        this.selector = selector;
        // const $   grid  = $(selector);
        // $grid.html('hello');
        this.createGrid();
        this.setupEventListener();
    }

    createGrid() {
        const $board = $(this.selector);
        // console.log($board);
        for (let row = 0; row < this.ROWS; row++) {
            const $row = $('<div>')
                .addClass('row');
            for (let col = 0; col < this.COLS; col++) {
                const $col = $('<div>')
                    .addClass('col empty')
                    .attr('data-col', col)
                    .attr('data-row', row);

                $row.append($col);
            }
            $board.append($row);
        }
        // console.log($board.html());

    }
    setupEventListener() {
        const $board = $(this.selector);
        function findLastEmptyCell(col) {
            const cells = $(`.col[data-col='${col}']`);
            for (let i = cells.length - 1; i >= 0; i--) {
                const $cell = $(cells[i]);
                if ($cell.hasClass('empty')) {
                    return $cell;
                }
            }
            return nulll;
        }

        $board.on('mouseenter', '.col.empty', function () {
            // console.log('here', this);
            const col = $(this).data('col');
            const $lastEmptyCell = findLastEmptyCell(col);
            $lastEmptyCell.addClass(`next-red`);
            // const row = $(this).data('row');
            // console.log(col);
            // console.log(row);
        })
        $board.on('mouseleave', '.col', function () {
            $('.col').removeClass(`next-red`);
        })

        $board.on('click','.col.empty',function(){
            const col = $(this).data('col');
            const row = $(this).data('row');
            const $lastEmptyCell = findLastEmptyCell(col);
            $lastEmptyCell.removeClass('empty');
            $lastEmptyCell.addClass('red');
        });
    }
}