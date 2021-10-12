package own.project.demo.jordancard;

import org.springframework.boot.autoconfigure.batch.BatchDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import own.project.demo.user.UserService;

import java.util.List;

@RestController
@RequestMapping("/jordanCard")
@CrossOrigin("http://localhost:3000/")

public class JordanCardWeb {


    private JordanCardService jordanCardService;

    public JordanCardWeb(JordanCardService jordanCardService) {
        this.jordanCardService = jordanCardService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<JordanCard> findJordanCardById(@PathVariable("id") Integer id) {
        return ResponseEntity.ok().body(jordanCardService.findById(id));
    }

    @PostMapping
    public ResponseEntity<JordanCard> postJordanCard(@RequestBody JordanCard jordanCard) {
        return ResponseEntity.ok().body(jordanCardService.postJordanCard(jordanCard));
    }

    @GetMapping
    public ResponseEntity<List<JordanCard>> getAllJordanCard (){
        return ResponseEntity.ok().body(jordanCardService.getAllJordanCard());
    }


    @DeleteMapping("/{id}")
    public void deleteJordanCardById (@PathVariable("id") Integer id) {
        jordanCardService.deleteJordanCard(id);
    }
}
