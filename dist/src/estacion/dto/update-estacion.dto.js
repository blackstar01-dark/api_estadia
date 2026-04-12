"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEstacionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_estacion_dto_1 = require("./create-estacion.dto");
class UpdateEstacionDto extends (0, mapped_types_1.PartialType)(create_estacion_dto_1.CreateEstacionDto) {
}
exports.UpdateEstacionDto = UpdateEstacionDto;
//# sourceMappingURL=update-estacion.dto.js.map