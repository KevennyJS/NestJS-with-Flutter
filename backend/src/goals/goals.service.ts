import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class GoalsService {

  constructor(private readonly prisma: PrismaService) { }

  create(createGoalDto: Prisma.GoalCreateInput) {
    return this.prisma.goal.create({
      data: createGoalDto
    });
  }

  update(id: number, updateGoalDto: Prisma.GoalUpdateInput) {
    return this.prisma.goal.update({
      data: updateGoalDto,
      where: {
        id: id
      }
    });
  }

  findAll() {
    return this.prisma.goal.findMany({
      include: {
        category: true,
      }
    });
  }

  findOne(id: number) {
    return this.prisma.goal.findUnique({
      where: {
        id: id
      },
      include: {
        category: true,
      }
    });
  }

  remove(id: number) {
    return this.prisma.goal.delete({
      where: {
        id: id
      }
    });
  }
}
