"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAuthpersonalDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_authpersonal_dto_1 = require("./create-authpersonal.dto");
class UpdateAuthpersonalDto extends (0, swagger_1.PartialType)(create_authpersonal_dto_1.LoginPersonalDto) {
}
exports.UpdateAuthpersonalDto = UpdateAuthpersonalDto;
//# sourceMappingURL=update-authpersonal.dto.js.map