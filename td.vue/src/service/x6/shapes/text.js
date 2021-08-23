import { Shape } from '@antv/x6';

const name = 'text';

export const TextBlock = Shape.Rect.define({
    height: 80,
    width: 150,
    constructorName: name,
    zIndex: 0,
    label: 'Arbitrary Text',
    attrs: {
        body: {
            magnet: true,
            fillOpacity: 0,
            strokeOpacity: 0
        }
    }
});

TextBlock.prototype.type = 'tm.Text';

TextBlock.prototype.setName = function (name) {
    this.label = name;
};

TextBlock.prototype.updateStyle = function () {};

export default {
    name,
    TextBlock
};
