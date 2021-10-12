package own.project.demo.jordancard;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JordanCardRepository extends JpaRepository<JordanCard, Integer> {
}
