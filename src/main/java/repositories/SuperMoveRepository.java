package repositories;

import models.SuperMove;
import org.springframework.data.repository.CrudRepository;

public interface SuperMoveRepository
    extends CrudRepository<SuperMove, Integer> {
}
