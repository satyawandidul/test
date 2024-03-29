import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { AgencyService } from "./agency.service";
import { CreateAgencyDto } from "./dto/create-agency.dto";
import { UpdateAgencyDto } from "./dto/update-agency.dto";

@Controller("agency")
export class AgencyController {
  constructor(private readonly agencyService: AgencyService) {}

  @Post()
  create(@Body() createAgencyDto: CreateAgencyDto) {
    return this.agencyService.create(createAgencyDto);
  }

  @Get()
  findAll() {
    return this.agencyService.findAll();
  }

  // Get all the agencies associated with the department.
  @Get(":deptId")
  findOne(@Param("deptId") deptId: string) {
    return this.agencyService.getAgenciesForDepartment(deptId);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAgencyDto: UpdateAgencyDto) {
    return this.agencyService.update(id, updateAgencyDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.agencyService.remove(id);
  }
}
